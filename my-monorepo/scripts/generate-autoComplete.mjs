#!/usr/bin/env node
/**
 * generate-autocomplete
 *
 * 목적
 * - `@sizlcorp/sizl-api-document`의 OpenAPI(`openapi.yaml`)에서 경로 파라미터가 없는 컬렉션 `get:` 엔드포인트를 수집합니다.
 * - 수집 결과를 JSON(`packages/core/src/api/get-endpoints.json`)으로 저장합니다.
 * - 옵션에 따라 각 리소스의 Autocomplete 컴포넌트를 스캐폴딩합니다:
 *   `packages/core/src/components/organisms/autocomplete/<Resource>GetAutocomplete.tsx`
 *
 * 실행 방법
 * - 목록만 생성 (문서 업데이트 포함)
 *   - npm run generate:autocomplete
 * - 문서 업데이트 생략
 *   - npm run generate:autocomplete -- --no-update
 * - 전체 컴포넌트 템플릿 생성
 *   - npm run generate:autocomplete -- --emit-components
 * - 일부만 인터랙티브 선택 생성
 *   - npm run generate:autocomplete -- --pick
 * - 생성 미리보기(파일 미작성)
 *   - npm run generate:autocomplete -- --pick --dry-run
 *
 * 비고
 * - 훅이 존재하는 리소스만 생성합니다. 확인 경로/심볼:
 *   `packages/core/src/hooks/api/<resource>/use<Pascal>Query.ts` 내 `export const use<Pascal><Pascal>GetQuery`.
 * - 이미 존재하는 컴포넌트 파일은 덮어쓰지 않습니다.
 * - Node 18+ 환경을 권장합니다.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve, join, dirname as pathDirname } from "node:path";
import readline from "node:readline";

const YAML_PATH = resolve(
  process.cwd(),
  "node_modules/@sizlcorp/sizl-api-document/apisrc/openapi.yaml"
);

const OUTPUT_PATH = resolve(
  process.cwd(),
  "packages/core/src/api/get-endpoints.json"
);

function ensureDir(path) {
  try {
    mkdirSync(dirname(path), { recursive: true });
  } catch {}
}

function log(...args) {
  console.log("[generate-autocomplete]", ...args);
}

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: "inherit", ...opts });
  if (res.status !== 0) {
    throw new Error(`Command failed: ${cmd} ${args.join(" ")}`);
  }
}

function updateSizlApiDocument() {
  log("Updating @sizlcorp/sizl-api-document to latest…");
  run("npm", ["i", "@sizlcorp/sizl-api-document@latest"]);
}

function parseGetCollectionPathsFromYaml(yamlText) {
  // 경로 라인(`/foo:`)을 수집하고, 블록 내 직접 get: 또는 $ref 대상의 fragment에 get:이 있는지 확인합니다.
  const lines = yamlText.split(/\r?\n/);
  const items = [];
  const openapiDir = pathDirname(YAML_PATH);

  function refTargetsGet(refLine) {
    // 형태: $ref: "./paths/locations.yaml#/locations"
    const m = refLine.match(/\$ref:\s*"([^"]+)"/);
    if (!m) return false;
    const full = m[1];
    const [fileRel, fragRaw] = full.split("#/");
    if (!fileRel || !fragRaw) return false;
    const filePath = join(openapiDir, fileRel);
    if (!existsSync(filePath)) return false;
    const frag = fragRaw.trim();
    try {
      const content = readFileSync(filePath, "utf-8");
      const clines = content.split(/\r?\n/);
      // fragment 는 top-level key로 존재. 해당 섹션부터 다음 top-level 전까지 scan
      let inFrag = false;
      for (let i = 0; i < clines.length; i++) {
        const l = clines[i];
        const fragStart = l.match(new RegExp(`^${frag}:\s*$`));
        if (fragStart) {
          inFrag = true;
          continue;
        }
        if (inFrag) {
          // 다음 top-level 키를 만나면 종료
          if (/^\S/.test(l)) break;
          if (/^\s*get:\s*$/.test(l)) return true;
        }
      }
    } catch {}
    return false;
  }

  let currentPath = null;
  let blockLines = [];
  function flush() {
    if (!currentPath) return;
    if (currentPath.includes("{")) {
      currentPath = null;
      blockLines = [];
      return;
    }
    // 우선 직접 get: 존재 여부
    const hasDirectGet = blockLines.some((l) => /^\s*get:\s*$/.test(l));
    let ok = hasDirectGet;
    if (!ok) {
      // $ref 라인 중 fragment 내 get: 확인
      const refLine = blockLines.find((l) => /\$ref:\s*"/.test(l));
      if (refLine) ok = refTargetsGet(refLine);
    }
    if (ok) items.push({ path: currentPath });
    currentPath = null;
    blockLines = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const pathMatch = line.match(/^\s*(\/[A-Za-z0-9_\/-]+):\s*$/);
    if (pathMatch) {
      // 이전 블록 처리
      flush();
      currentPath = pathMatch[1];
      blockLines = [];
      continue;
    }
    if (currentPath) {
      // 다음 경로 시작 전까지 누적
      const nextPathStart = line.match(/^\s*\/[A-Za-z0-9_\/-]+:\s*$/);
      if (nextPathStart) {
        flush();
        currentPath = nextPathStart[0].trim().replace(/:$/, "");
        blockLines = [];
      } else {
        blockLines.push(line);
      }
    }
  }
  // 마지막 블록 flush
  flush();

  return items;
}

function toPascalCase(input) {
  return input
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

function toCamelCase(input) {
  const p = toPascalCase(input);
  return p ? p[0].toLowerCase() + p.slice(1) : "";
}

function kebabCase(input) {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

function resourceFromPath(p) {
  const m = p.match(/^\/(.+)\/find$/);
  return m ? m[1] : p.replace(/\//g, "");
}

function genAutocompleteComponent({ resource }) {
  const Pascal = toPascalCase(resource);
  const hookFile = `@core/hooks/api/${kebabCase(resource)}/use${Pascal}Query`;
  const hookName = `use${Pascal}${Pascal}GetQuery`;

  // Template aligned with LocationsGetAutocomplete: pagination, load more, clear, loading description
  return `import { ${hookName} } from "${hookFile}";
import { ActionIcon, Autocomplete, AutocompleteProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@core/components/atoms/Icon";

type AutocompleteItem<T> = { value: string; label: string; __item?: T };

export type ${Pascal}GetAutocompleteProps<T = any> = {
  onSelect?: (item: T) => void;
  label?: string;
  description?: string;
  placeholder?: string;
  pageSize?: number;
  minLength?: number;
  autocompleteProps?: Partial<AutocompleteProps>;
  onClear?: () => void;
  searchFields?: string[];
};

export function ${Pascal}GetAutocomplete<T = any>({
  onSelect,
  label = "${Pascal} 검색",
  description,
  placeholder = "코드/이름으로 검색",
  pageSize = 10,
  minLength = 0,
  autocompleteProps,
  onClear,
  searchFields = ["code", "name"],
}: ${Pascal}GetAutocompleteProps<T>) {
  const LOAD_MORE_VALUE = "__LOAD_MORE__" as const;
  const LOAD_MORE_LABEL = "더 보기…" as const;
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 300);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const loadingMoreRef = useRef(false);

  const enabled = debounced.trim().length >= minLength;

  const { data: res, isFetching } = ${hookName}({
    search: enabled ? debounced : undefined,
    page: enabled ? page : 1,
    pageSize: enabled ? pageSize : pageSize,
    searchFields: enabled ? searchFields : undefined,
  } as any);

  useEffect(() => {
    setPage(1);
    setItems([]);
  }, [debounced]);

  useEffect(() => {
    const rows: T[] = ((res as any)?.data?.rows ?? []) as T[];
    if (!rows) return;
    setItems((prev) => (page === 1 ? rows : [...prev, ...rows]));
    setHasMore(Array.isArray(rows) && rows.length >= pageSize);
    loadingMoreRef.current = false;
  }, [res, pageSize, page]);

  const data: AutocompleteItem<T>[] = useMemo(() => {
    const mapped: AutocompleteItem<T>[] = items.map((r: any) => {
      const label =
        r?.code && r?.name
          ? String(r.code) + " - " + String(r.name)
          : (r?.code ?? r?.name ?? String(r?.id ?? ""));
      const value = String(label) + "#" + String(r?.id ?? label);
      return { value, label, __item: r as T } as AutocompleteItem<T>;
    });
    if (enabled && hasMore)
      mapped.push({ value: LOAD_MORE_VALUE, label: LOAD_MORE_LABEL } as AutocompleteItem<T>);
    return mapped;
  }, [items, enabled, hasMore]);

  return (
    <Autocomplete
      label={label}
      description={description ?? (isFetching && enabled ? "불러오는 중…" : undefined)}
      placeholder={placeholder}
      value={value}
      onChange={(v) => {
        if (v === LOAD_MORE_LABEL) return;
        setValue(v);
        if (!dropdownOpened) setDropdownOpened(true);
      }}
      data={data as any}
      dropdownOpened={dropdownOpened}
      onDropdownOpen={() => setDropdownOpened(true)}
      onDropdownClose={() => setDropdownOpened(false)}
      filter={({ options, limit }) => options.slice(0, limit)}
      onOptionSubmit={(val) => {
        if (val === LOAD_MORE_VALUE) {
          if (!loadingMoreRef.current && hasMore) {
            loadingMoreRef.current = true;
            setPage((p) => p + 1);
            setTimeout(() => setDropdownOpened(true), 0);
          }
          setTimeout(() => setValue((prev) => prev), 0);
          return;
        }
        const found = (data as AutocompleteItem<T>[]).find((d) => d.value === val);
        if (found?.__item && onSelect) onSelect(found.__item);
        setValue(found?.label ?? val);
      }}
      rightSection={
        value ? (
          <ActionIcon
            size="sm"
            variant="subtle"
            color="gray"
            aria-label="Clear selection"
            onClick={() => {
              setValue("");
              setItems([]);
              setPage(1);
              onClear?.();
            }}
          >
            <Icon name="close" size={14} />
          </ActionIcon>
        ) : undefined
      }
      rightSectionPointerEvents="all"
      {...autocompleteProps}
    />
  );
}
`;
}

function findHookForResource(resource) {
  const Pascal = toPascalCase(resource);
  const hooksPath = resolve(
    process.cwd(),
    `packages/core/src/hooks/api/${kebabCase(resource)}/use${Pascal}Query.ts`
  );
  const hookName = `use${Pascal}${Pascal}GetQuery`;
  if (!existsSync(hooksPath)) return { exists: false, hooksPath, hookName };
  try {
    const content = readFileSync(hooksPath, "utf-8");
    const ok = new RegExp(`export\\s+const\\s+${hookName}\\b`).test(content);
    return { exists: ok, hooksPath, hookName };
  } catch {
    return { exists: false, hooksPath, hookName };
  }
}

function writeAutocompleteComponent(pathStr) {
  const resource = resourceFromPath(pathStr);
  const hookCheck = findHookForResource(resource);
  if (!hookCheck.exists) {
    log(
      `관련 API/Hook을 찾을 수 없습니다: ${pathStr} (expected: ${hookCheck.hooksPath} :: ${hookCheck.hookName})`
    );
    return { outPath: null, skipped: true, missingHook: true };
  }
  const Pascal = toPascalCase(resource);
  const outPath = resolve(
    process.cwd(),
    `packages/core/src/components/organisms/autocomplete/${Pascal}GetAutocomplete.tsx`
  );
  if (existsSync(outPath)) {
    return { outPath, skipped: true };
  }
  ensureDir(outPath);
  const content = genAutocompleteComponent({ resource });
  writeFileSync(outPath, content);
  return { outPath, skipped: false };
}

async function promptSelect(items) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const question = (q) => new Promise((res) => rl.question(q, res));

  console.log("\nAvailable /…/find endpoints:");
  items.forEach((it, idx) => {
    console.log(String(idx + 1).padStart(3), "-", it.path);
  });
  console.log("\nPick endpoints to scaffold components:");
  console.log(" - Enter numbers (e.g., 1,3,5 or 2-6)");
  console.log(" - Or enter path fragments (e.g., items, grades)");
  console.log(" - Or '*' for all");

  const answer = (await question("> ")).trim();
  rl.close();

  if (!answer) return [];
  if (answer === "*" || answer.toLowerCase() === "all")
    return items.map((_, i) => i);

  const picked = new Set();
  const parts = answer.split(/[\s,]+/).filter(Boolean);
  for (const p of parts) {
    if (/^\d+(?:-\d+)?$/.test(p)) {
      const [a, b] = p.split("-").map((n) => parseInt(n, 10));
      const start = Math.max(1, a);
      const end = Math.min(items.length, b ? b : a);
      for (let i = start; i <= end; i++) picked.add(i - 1);
    } else {
      // treat as substring filter on path
      const key = p.toLowerCase();
      items.forEach((it, idx) => {
        if (it.path.toLowerCase().includes(key)) picked.add(idx);
      });
    }
  }
  return Array.from(picked.values()).sort((a, b) => a - b);
}

async function main() {
  const args = process.argv.slice(2);
  const noUpdate = args.includes("--no-update");
  const emitComponents =
    args.includes("--emit-components") || args.includes("--components");
  const pickMode = args.includes("--pick") || args.includes("--select");
  const dryRun = args.includes("--dry-run");

  if (!noUpdate) {
    try {
      updateSizlApiDocument();
    } catch (e) {
      log("Package update failed:", e?.message || e);
      // continue even if update fails
    }
  } else {
    log("Skipping package update (--no-update)");
  }

  const yamlText = readFileSync(YAML_PATH, "utf-8");
  const items = parseGetCollectionPathsFromYaml(yamlText);
  ensureDir(OUTPUT_PATH);
  writeFileSync(OUTPUT_PATH, JSON.stringify(items, null, 2));
  log(`Generated ${items.length} GET endpoints -> ${OUTPUT_PATH}`);

  if (emitComponents || pickMode) {
    let targets = items;
    if (pickMode) {
      const idxs = await promptSelect(items);
      targets = idxs.map((i) => items[i]).filter(Boolean);
      if (!targets.length) {
        log("No selection made. Exiting without scaffolding.");
        return;
      }
    }

    if (dryRun) {
      log("[dry-run] would scaffold components for:");
      targets.forEach((it) => console.log(" -", it.path));
      return;
    }

    let created = 0;
    let skipped = 0;
    let missing = 0;
    for (const it of targets) {
      const { skipped: s, missingHook } = writeAutocompleteComponent(it.path);
      if (missingHook) missing += 1;
      else if (s) skipped += 1;
      else created += 1;
    }
    log(
      `Scaffolded Autocomplete components: +${created}, skipped existing: ${skipped}, missing hooks: ${missing}`
    );
  }
}

main();
