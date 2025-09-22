#!/usr/bin/env node
/**
 * generate-autoComplete
 *
 * 목적
 * - `@sizlcorp/sizl-api-document`의 OpenAPI(`openapi.yaml`)에서 `/.../find` 엔드포인트를 수집합니다.
 * - 수집 결과를 JSON(`packages/core/src/api/find-endpoints.json`)으로 저장합니다.
 * - 옵션에 따라 각 리소스의 Autocomplete 컴포넌트를 스캐폴딩합니다:
 *   `packages/core/src/components/organisms/autocomplete/<Resource>FindAutocomplete.tsx`
 *
 * 실행 방법
 * - 목록만 생성 (문서 업데이트 포함)
 *   - npm run generate:autoComplete
 * - 문서 업데이트 생략
 *   - npm run generate:autoComplete -- --no-update
 * - 전체 컴포넌트 템플릿 생성
 *   - npm run generate:autoComplete -- --emit-components
 * - 일부만 인터랙티브 선택 생성
 *   - npm run generate:autoComplete -- --pick
 * - 생성 미리보기(파일 미작성)
 *   - npm run generate:autoComplete -- --pick --dry-run
 *
 * 비고
 * - 훅이 존재하는 리소스만 생성합니다. 확인 경로/심볼:
 *   `packages/core/src/hooks/api/<resource>/use<Pascal>Query.ts` 내 `export const use<Pascal><Pascal>FindPostQuery`.
 * - 이미 존재하는 컴포넌트 파일은 덮어쓰지 않습니다.
 * - Node 18+ 환경을 권장합니다.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import readline from "node:readline";

const YAML_PATH = resolve(
  process.cwd(),
  "node_modules/@sizlcorp/sizl-api-document/apisrc/openapi.yaml"
);

const OUTPUT_PATH = resolve(
  process.cwd(),
  "packages/core/src/api/find-endpoints.json"
);

function ensureDir(path) {
  try {
    mkdirSync(dirname(path), { recursive: true });
  } catch {}
}

function log(...args) {
  console.log("[generate-autoComplete]", ...args);
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

function parseFindPathsFromYaml(yamlText) {
  const lines = yamlText.split(/\r?\n/);
  const items = [];
  for (const line of lines) {
    // Match lines like: "  /items/find:" (with optional indentation)
    const m = line.match(/^\s*(\/[A-Za-z0-9_-]+\/find):\s*$/);
    if (m) {
      items.push({ path: m[1] });
    }
  }
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
  const hookName = `use${Pascal}${Pascal}FindPostQuery`;

  // Lightweight, generic template mirroring the existing ItemsFindAutocomplete
  return `import { ${hookName} } from "${hookFile}";
import { ActionIcon, Autocomplete, AutocompleteProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { Icon } from "../../atoms/Icon";

export type ${Pascal}FindAutocompleteProps<T = any> = {
  onSelect?: (item: T) => void;
  label?: string;
  description?: string;
  placeholder?: string;
  limit?: number;
  minLength?: number;
  autocompleteProps?: Partial<AutocompleteProps>;
  onClear?: () => void;
};

export function ${Pascal}FindAutocomplete<T = any>({
  onSelect,
  label = "${Pascal} 검색",
  description,
  placeholder = "코드/이름으로 검색",
  limit = 20,
  minLength = 1,
  autocompleteProps,
  onClear,
}: ${Pascal}FindAutocompleteProps<T>) {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 300);

  const enabled = debounced.trim().length >= minLength;

  // NOTE: generator cannot infer the exact request type here; use any for template
  const { data: rows } = ${hookName}({} as any);
  const items: T[] = (rows?.data ?? []) as T[];

  const { data, map } = useMemo(() => {
    const m = new Map<string, T>();
    const d = items.slice(0, limit).map((r: any) => {
      const label = r?.code && r?.name ? (String(r.code) + " - " + String(r.name)) : (r?.code ?? r?.name ?? String(r?.id ?? ""));
      const key = String(label) + "#" + String(r?.id ?? label); // reduce collision risk
      m.set(key, r as T);
      return key;
    });
    return { data: d, map: m };
  }, [rows, limit]);

  return (
    <Autocomplete
      label={label}
      description={description}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      data={data}
      limit={limit}
      onOptionSubmit={(val) => {
        const item = map.get(val);
        setValue(val);
        if (item && onSelect) onSelect(item);
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
              onClear?.();
            }}
          >
            <Icon name=\"close\" size={14} />
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
  const hookName = `use${Pascal}${Pascal}FindPostQuery`;
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
    `packages/core/src/components/organisms/autocomplete/${Pascal}FindAutocomplete.tsx`
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
  const items = parseFindPathsFromYaml(yamlText);
  ensureDir(OUTPUT_PATH);
  writeFileSync(OUTPUT_PATH, JSON.stringify(items, null, 2));
  log(`Generated ${items.length} find endpoints -> ${OUTPUT_PATH}`);

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
