#!/usr/bin/env node
/*
  auto-generate-api

  목적
  - `@core/instance/axios.ts`에 선언된 인스턴스를 기준으로, 연결된 API 클래스들을 스캔합니다.
  - 각 API의 d.ts에서 메서드/요청 타입을 수집하여 리소스별 Query 모듈과 React Query 훅을 생성합니다.
  - 선택적으로 `@sizlcorp/sizl-api-document`를 최신으로 업데이트합니다.

  출력
  - `packages/core/src/api/<resource>/<Resource>Query.ts`
  - `packages/core/src/hooks/api/<resource>/use<Resource>Query.ts`
  - `packages/core/src/hooks/api/<resource>/use<Resource>Mutation.ts`

  실행 방법
  - 전체 자동 생성: npm run generate:document:auto
  - 문서 업데이트 생략: node scripts/auto-generate-api.mjs --no-update
  - 일부 리소스만: node scripts/auto-generate-api.mjs --filter <resource>
  - 기존 파일 덮어쓰기: node scripts/auto-generate-api.mjs --overwrite
  - 동작만 확인: node scripts/auto-generate-api.mjs --dry-run

  비고
  - 리소스가 이미 존재하면 기본적으로 건너뜁니다(`--overwrite`로 대체 생성).
  - Node 18+ 권장.
*/

import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

const repoRoot = process.cwd();

function log(...args) {
  console.log("[auto-generate]", ...args);
}
function warn(...args) {
  console.warn("[auto-generate]", ...args);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function kebabCase(s) {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}
function pascalCase(s) {
  return s
    .replace(/[-_]+/g, " ")
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}
function camelCase(s) {
  const p = pascalCase(s);
  return p[0].toLowerCase() + p.slice(1);
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

// Parse axios instances to map API class -> Instance name from packages/core/src/instance/axios.ts
function readAxiosInstances() {
  const axiosPath = path.join(
    repoRoot,
    "packages",
    "core",
    "src",
    "instance",
    "axios.ts"
  );
  if (!fs.existsSync(axiosPath)) {
    throw new Error("packages/core/src/instance/axios.ts not found");
  }
  const src = fs.readFileSync(axiosPath, "utf-8");

  // Map factory name -> Api class (e.g., masterAxios -> MasterApi)
  const factoryToApi = {};
  // Capture full factory name including 'Axios' to match instance assignment values (e.g., productionAxios)
  const factoryRe =
    /const\s+(\w+Axios)\s*=\s*\([^)]*\)\s*=>\s*\{[^\n]*\n\s*return\s+new\s+(\w+)\s*\(/g;
  let fm;
  while ((fm = factoryRe.exec(src))) {
    factoryToApi[fm[1]] = fm[2];
  }

  // Map Instance export -> factory name (e.g., MasterInstance -> masterAxios)
  const instanceToFactory = {};
  const instRe = /export\s+const\s+(\w+)\s*=\s*(\w+)\s*\(/g;
  let im;
  while ((im = instRe.exec(src))) {
    instanceToFactory[im[1]] = im[2];
  }

  // Build ApiClass -> Instance name map (only for factories that resolve to known Api classes)
  const apiToInstance = {};
  for (const [instanceName, factoryName] of Object.entries(instanceToFactory)) {
    const apiClass = factoryToApi[factoryName];
    if (apiClass) apiToInstance[apiClass] = instanceName;
  }
  return apiToInstance; // e.g., { MasterApi: 'MasterInstance', SpcApi: 'SpcInstance', ... }
}

// Find the d.ts file for a given Api class under dist/models/src/api
function findApiDts(apiClass) {
  const apiDir = path.join(
    repoRoot,
    "node_modules",
    "@sizlcorp",
    "sizl-api-document",
    "dist",
    "models",
    "src",
    "api"
  );
  const files = fs.readdirSync(apiDir).filter((f) => f.endsWith("-api.d.ts"));
  for (const f of files) {
    const p = path.join(apiDir, f);
    const content = fs.readFileSync(p, "utf-8");
    if (
      new RegExp(`export\\s+declare\\s+class\\s+${apiClass}\\b`).test(content)
    ) {
      return p;
    }
  }
  return null;
}

// Extract method -> requestType pairs from an Api class d.ts
function parseApiMethods(dtsContent) {
  // 1) Signatures that use requestParameters?: <RequestType>
  const reParams =
    /\n\s*([a-z][A-Za-z0-9]*)\(requestParameters\??:\s*([A-Za-z0-9_]+)\b/g;
  const methods = [];
  let m;
  while ((m = reParams.exec(dtsContent))) {
    const methodName = m[1];
    const requestType = m[2];
    methods.push({ methodName, requestType });
  }

  // 2) Zero-parameter operations (e.g., authWhoamiGet(options?: AxiosRequestConfig))
  // These have no requestParameters type; capture them so they can be generated too.
  const reZeroParams =
    /\n\s*([a-z][A-Za-z0-9]*)\(options\?:(?:\s*AxiosRequestConfig|\s*any)\)[^;]*;/g;
  let z;
  while ((z = reZeroParams.exec(dtsContent))) {
    const methodName = z[1];
    // Skip if already captured by requestParameters pattern
    if (!methods.find((mm) => mm.methodName === methodName)) {
      methods.push({ methodName, requestType: null });
    }
  }

  return methods;
}

function splitMethod(methodName) {
  // Determine suffix by priority (longest first to avoid Post vs FindPost mismatch)
  const suffixes = [
    "FindPost",
    "DownloadGet",
    "Get",
    "Post",
    "Put",
    "Delete",
    "Patch",
  ];
  for (const s of suffixes) {
    if (methodName.endsWith(s)) {
      return { base: methodName.slice(0, -s.length), suffix: s };
    }
  }
  return { base: methodName, suffix: "" };
}

function resourceRootFromBase(base) {
  // Strip trailing detail tokens like XxxId / XxxUuid at the end of base, if present
  // e.g., usersUserId -> users, gradesGradeId -> grades
  const m = base.match(/^(.*?)([A-Z][a-zA-Z]*?(Id|Uuid))$/);
  if (m) return m[1] || base;
  return base;
}

function discoverAll() {
  const apiToInstance = readAxiosInstances();
  const out = new Map(); // key: `${instance}::${resourceRoot}` -> { instance, resourceRoot, queries:[], mutations:[], reqTypes:Set }

  for (const [apiClass, instance] of Object.entries(apiToInstance)) {
    const dtsPath = findApiDts(apiClass);
    if (!dtsPath) {
      warn(`d.ts not found for ${apiClass}, skipping.`);
      continue;
    }
    const dts = fs.readFileSync(dtsPath, "utf-8");
    const methods = parseApiMethods(dts);
    if (!methods.length) continue;

    for (const { methodName, requestType } of methods) {
      const { base, suffix } = splitMethod(methodName);
      const resourceRoot = resourceRootFromBase(base);
      const key = `${instance}::${resourceRoot}`;
      if (!out.has(key)) {
        out.set(key, {
          instance,
          resource: resourceRoot,
          queries: [],
          mutations: [],
          reqTypes: new Set(),
        });
      }
      const group = out.get(key);
      group.reqTypes.add(requestType);

      // Classify queries vs mutations by suffix
      if (
        suffix === "Get" ||
        suffix === "FindPost" ||
        suffix === "DownloadGet"
      ) {
        group.queries.push({
          name: methodName,
          requestType,
          method: methodName,
        });
      } else if (suffix) {
        group.mutations.push({
          name: methodName,
          requestType,
          method: methodName,
        });
      }
    }
  }

  return Array.from(out.values());
}

function targetExists(resource) {
  const folder = path.join(
    repoRoot,
    "packages",
    "core",
    "src",
    "api",
    kebabCase(resource)
  );
  const f = path.join(folder, `${resource}Query.ts`);
  return fs.existsSync(f);
}

function genQueryModule({
  resource,
  instance,
  key,
  queries,
  mutations,
  importTypes,
}) {
  const resourceVar = camelCase(resource);
  const queryEntries = queries
    .map((q) => {
      const hasParams = !!q.requestType;
      const paramsSig = hasParams ? `(params: ${q.requestType})` : `()`;
      const keyLine = hasParams
        ? `queryKey: [params],`
        : `queryKey: ["${q.name}"],`;
      const callExpr = hasParams
        ? `${instance}.${q.method}(params)`
        : `${instance}.${q.method}()`;
      return `  ${q.name}: ${paramsSig} => {\n    return {\n      ${keyLine}\n      queryFn: () => ${callExpr},\n    };\n  },`;
    })
    .join("\n");

  const mutationEntries = mutations
    .map((m) => {
      const hasParams = !!m.requestType;
      const paramsSig = hasParams ? `(params: ${m.requestType})` : `()`;
      const keyLine = hasParams
        ? `mutationKey: [params],`
        : `mutationKey: ["${m.name}"],`;
      const callExpr = hasParams
        ? `${instance}.${m.method}(params)`
        : `${instance}.${m.method}()`;
      return `  ${m.name}: ${paramsSig} => {\n    return {\n      ${keyLine}\n      mutationFn: () => ${callExpr},\n    };\n  },`;
    })
    .join("\n");
  const importFactories = [
    queries.length > 0 ? "createQueryKeys" : null,
    mutations.length > 0 ? "createMutationKeys" : null,
    queries.length > 0 && mutations.length > 0 ? "mergeQueryKeys" : null,
  ]
    .filter(Boolean)
    .join(",\n  ");

  const modelsImport = importTypes.length
    ? `import {\n  ${importTypes.join(",\n  ")}\n} from "@sizlcorp/sizl-api-document/dist/models";\n`
    : "";

  const parts = [];
  parts.push(`import { ${instance} } from "@core/instance/axios";`);
  parts.push(
    `import {\n  ${importFactories}\n} from "@lukemorales/query-key-factory";`
  );
  parts.push(modelsImport + 'import { AxiosResponse } from "axios";');
  parts.push(`\nexport const ${key}_QUERY_KEY = "${key}";`);

  if (queries.length > 0) {
    parts.push(
      `\nexport const ${resourceVar} = createQueryKeys(${key}_QUERY_KEY, {\n${queryEntries}\n});`
    );
  }
  if (mutations.length > 0) {
    parts.push(
      `\nexport const ${resourceVar}Mutate = createMutationKeys(${key}_QUERY_KEY, {\n${mutationEntries}\n});`
    );
  }

  if (queries.length > 0 && mutations.length > 0) {
    parts.push(
      `\nexport const ${resourceVar}QueryKeys = mergeQueryKeys(${resourceVar}, ${resourceVar}Mutate);`
    );
  } else if (queries.length > 0) {
    parts.push(`\nexport const ${resourceVar}QueryKeys = ${resourceVar};`);
  } else if (mutations.length > 0) {
    parts.push(
      `\nexport const ${resourceVar}QueryKeys = ${resourceVar}Mutate;`
    );
  } else {
    parts.push(`\nexport const ${resourceVar}QueryKeys = {} as const;`);
  }

  return parts.join("\n");
}

function genHooksModule({ resource, queries }) {
  const resourceVar = camelCase(resource);
  const resourcePascal = pascalCase(resource);
  const hookImports = Array.from(
    new Set(queries.map((q) => q.requestType).filter(Boolean))
  );
  const blocks = queries
    .map((q) => {
      const hookName = `use${resourcePascal}${pascalCase(q.name)}Query`;
      const hasParams = !!q.requestType;
      const callExpr = hasParams
        ? `...${resourceVar}.${q.name}(params),`
        : `...${resourceVar}.${q.name}(),`;
      const defaultOptions =
        q.name.toLowerCase().includes("find") && hasParams
          ? `enabled: !!params,`
          : `retry: 1,`;
      const sig = hasParams ? `(params: ${q.requestType})` : `()`;
      return `export const ${hookName} = ${sig} => {\n  return useQuery({\n    ${callExpr}\n    ${defaultOptions}\n  });\n};`;
    })
    .join("\n\n");

  const importModelsLine = hookImports.length
    ? `import { ${hookImports.join(", ")} } from "@sizlcorp/sizl-api-document/dist/models";\n`
    : "";

  return `import { ${resourceVar} } from "@core/api/${kebabCase(resource)}/${resource}Query";\n${importModelsLine}import { useQuery } from "@tanstack/react-query";\n\n${blocks}\n`;
}

function genMutationHooksModule({ resource, mutations }) {
  const resourceVar = camelCase(resource);
  const resourcePascal = pascalCase(resource);
  const hookImports = Array.from(
    new Set(mutations.map((m) => m.requestType).filter(Boolean))
  );

  const blocks = mutations
    .map((m) => {
      const hookName = `use${resourcePascal}${pascalCase(m.name)}Mutation`;
      const keyStr = `${m.name}`;
      const hasParams = !!m.requestType;
      const tv = hasParams ? m.requestType : "void";
      const mutationFn = hasParams
        ? `(params: ${m.requestType}) => ${resourceVar}Mutate.${m.name}(params).mutationFn(undefined)`
        : `(_: void) => ${resourceVar}Mutate.${m.name}().mutationFn(undefined)`;
      return `export const ${hookName} = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ${tv}, unknown>, 'mutationFn' | 'mutationKey'>) => {\n  return useMutation({\n    mutationKey: ["${keyStr}"],\n    mutationFn: ${mutationFn},\n    ...(options ?? {}),\n  });\n};`;
    })
    .join("\n\n");

  return `import { ${resourceVar}Mutate } from "@core/api/${kebabCase(resource)}/${resource}Query";\n${hookImports.length ? `import { ${hookImports.join(", ")} } from "@sizlcorp/sizl-api-document/dist/models";\n` : ""}import { useMutation, UseMutationOptions } from "@tanstack/react-query";\nimport { AxiosResponse } from "axios";\n\n${blocks}\n`;
}

function writeFiles({ resource, instance, queries, mutations }) {
  const key = resource.toUpperCase();
  const apiOutDir = path.join(
    repoRoot,
    "packages",
    "core",
    "src",
    "api",
    kebabCase(resource)
  );
  const apiOutFile = path.join(apiOutDir, `${resource}Query.ts`);
  const hooksOutDir = path.join(
    repoRoot,
    "packages",
    "core",
    "src",
    "hooks",
    "api",
    kebabCase(resource)
  );
  const hooksOutFile = path.join(
    hooksOutDir,
    `use${pascalCase(resource)}Query.ts`
  );
  const hooksMutOutFile = path.join(
    hooksOutDir,
    `use${pascalCase(resource)}Mutation.ts`
  );

  ensureDir(apiOutDir);
  ensureDir(hooksOutDir);

  const importTypes = Array.from(
    new Set(
      [
        ...queries.map((q) => q.requestType),
        ...mutations.map((m) => m.requestType),
      ].filter(Boolean)
    )
  );

  const queryModule = genQueryModule({
    resource,
    instance,
    key,
    queries,
    mutations,
    importTypes,
  });
  const hooksModule = queries.length
    ? genHooksModule({ resource, queries })
    : null;
  const hooksMutationModule = mutations.length
    ? genMutationHooksModule({ resource, mutations })
    : null;

  fs.writeFileSync(apiOutFile, queryModule, "utf-8");
  const outFiles = [apiOutFile];
  if (hooksModule) {
    fs.writeFileSync(hooksOutFile, hooksModule, "utf-8");
    outFiles.push(hooksOutFile);
  }
  if (hooksMutationModule) {
    fs.writeFileSync(hooksMutOutFile, hooksMutationModule, "utf-8");
    outFiles.push(hooksMutOutFile);
  }
  return outFiles;
}

function main() {
  const args = process.argv.slice(2);
  const noUpdate = args.includes("--no-update");
  const dryRun = args.includes("--dry-run");
  const overwrite = args.includes("--overwrite") || args.includes("--regen");
  const filterIdx = args.findIndex((a) => a === "--filter");
  const filter = filterIdx !== -1 ? (args[filterIdx + 1] || "").trim() : "";
  if (!noUpdate) {
    updateSizlApiDocument();
  } else {
    log("Skipping package update (--no-update)");
  }

  let groups = discoverAll();
  if (filter) {
    groups = groups.filter((g) => g.resource === filter);
    log("Filter applied:", filter, `(${groups.length} group(s))`);
  }
  const generated = [];
  const skipped = [];

  for (const g of groups) {
    const { resource, instance, queries, mutations } = g;
    if (targetExists(resource) && !overwrite) {
      skipped.push(`${resource} (${instance})`);
      continue;
    }
    if (dryRun) {
      log(
        "[dry-run] would generate:",
        resource,
        "via",
        instance,
        `queries:${queries.length}`,
        `mutations:${mutations.length}`,
        overwrite ? "(overwrite)" : ""
      );
      continue;
    }
    const files = writeFiles({ resource, instance, queries, mutations });
    generated.push({ resource, instance, files });
  }

  log("Done.");
  if (generated.length) {
    log("Generated:");
    for (const g of generated) {
      for (const f of g.files) {
        console.log(" -", path.relative(repoRoot, f));
      }
    }
  } else {
    log("No new resources to generate.");
  }
  if (skipped.length) {
    log("Skipped existing resources:", skipped.join(", "));
  }
}

main();
