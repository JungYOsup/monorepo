#!/usr/bin/env node
/*
  단일 설정(JSON) 기반 API + Hooks 생성기
  - 입력: 쿼리/뮤테이션을 기술한 JSON 설정
  - 출력: Query 모듈과 React Query 훅 모듈
  - 목적: packages/core 스타일(query-key-factory + axios 인스턴스)을 그대로 적용
*/

import fs from 'fs';
import path from 'path';

const cwd = process.cwd();

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function pascalCase(s) {
  return s
    .replace(/[-_]+/g, ' ')
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}

function camelCase(s) {
  const p = pascalCase(s);
  return p.charAt(0).toLowerCase() + p.slice(1);
}

function unique(arr) {
  return Array.from(new Set(arr));
}

function genQueryModule({ resource, instance, key, queries, mutations }) {
  const resourceVar = camelCase(resource);
  const queryKeyConst = key || resource.toUpperCase();

  const reqTypes = unique([
    ...queries.map(q => q.requestType),
    ...mutations.map(m => m.requestType),
  ].filter(Boolean));

  const selectRespTypes = unique(
    queries.map(q => q.select?.responseType).filter(Boolean)
  );

  const importsModels = unique([...reqTypes, ...selectRespTypes]);

  const queryEntries = queries.map(q => {
    const hasParams = !!q.requestType;
    const keyLine = hasParams ? 'queryKey: [params],' : `queryKey: ["${q.name}"],`;
    const callExpr = hasParams ? `${instance}.${q.method}(params)` : `${instance}.${q.method}()`;
    let body = `queryFn: () => ${callExpr},`;
    if (q.select?.responseType) {
      body = hasParams
        ? `queryFn: () =>\n        ${instance}.${q.method}(params).then(\n          (res: AxiosResponse<${q.select.responseType}, any>) => res.data\n        ),`
        : `queryFn: () =>\n        ${instance}.${q.method}().then(\n          (res: AxiosResponse<${q.select.responseType}, any>) => res.data\n        ),`;
    }
    const sig = hasParams ? `(params: ${q.requestType})` : `()`;
    return `  ${q.name}: ${sig} => {\n    return {\n      ${keyLine}\n      ${body}\n    };\n  },`;
  }).join('\n');

  const mutationEntries = mutations.map(m => {
    const hasParams = !!m.requestType;
    const keyExpr = hasParams
      ? (Array.isArray(m.keyFields) && m.keyFields.length
        ? `[${m.keyFields.map(f => `params.${f}`).join(', ')}]`
        : `[params]`)
      : `["${m.name}"]`;
    const sig = hasParams ? `(params: ${m.requestType})` : `()`;
    const callExpr = hasParams ? `${instance}.${m.method}(params)` : `${instance}.${m.method}()`;
    return `  ${m.name}: ${sig} => {\n    return {\n      mutationKey: ${keyExpr},\n      mutationFn: () => ${callExpr},\n    };\n  },`;
  }).join('\n');
  const importFactories = [
    queries.length > 0 ? 'createQueryKeys' : null,
    mutations.length > 0 ? 'createMutationKeys' : null,
    queries.length > 0 && mutations.length > 0 ? 'mergeQueryKeys' : null,
  ].filter(Boolean).join(',\n  ');

  const modelsImport = importsModels.length
    ? `import {\n  ${importsModels.join(',\n  ')}\n} from "@sizlcorp/sizl-api-document/dist/models";\n`
    : '';

  const parts = [];
  parts.push(`import { ${instance} } from "@core/instance/axios";`);
  parts.push(`import {\n  ${importFactories}\n} from "@lukemorales/query-key-factory";`);
  parts.push(modelsImport + 'import { AxiosResponse } from "axios";');
  parts.push(`\nexport const ${queryKeyConst}_QUERY_KEY = "${queryKeyConst}";`);

  if (queries.length > 0) {
    parts.push(`\nexport const ${resourceVar} = createQueryKeys(${queryKeyConst}_QUERY_KEY, {\n${queryEntries}\n});`);
  }
  if (mutations.length > 0) {
    parts.push(`\nexport const ${resourceVar}Mutate = createMutationKeys(${queryKeyConst}_QUERY_KEY, {\n${mutationEntries}\n});`);
  }

  // Export merged or single key set for convenience
  if (queries.length > 0 && mutations.length > 0) {
    parts.push(`\nexport const ${camelCase(resource)}QueryKeys = mergeQueryKeys(${resourceVar}, ${resourceVar}Mutate);`);
  } else if (queries.length > 0) {
    parts.push(`\nexport const ${camelCase(resource)}QueryKeys = ${resourceVar};`);
  } else if (mutations.length > 0) {
    parts.push(`\nexport const ${camelCase(resource)}QueryKeys = ${resourceVar}Mutate;`);
  } else {
    parts.push(`\nexport const ${camelCase(resource)}QueryKeys = {} as const;`);
  }

  return parts.join('\n');
}

function genHooksModule({ resource, queries }) {
  const resourcePascal = pascalCase(resource);
  const resourceVar = camelCase(resource);

  const hookImports = unique(queries.map(q => q.requestType).filter(Boolean));

  const hookBlocks = queries.map(q => {
    const hasParams = !!q.requestType;
    const hookName = `use${resourcePascal}${pascalCase(q.name)}Query`;
    const defaultOptions = q.name.toLowerCase().includes('select') && hasParams
      ? `staleTime: 1000 * 60 * 5,\n    enabled: !!params,`
      : `staleTime: 1000 * 60,\n    retry: 1,`;
    const sig = hasParams ? `(params: ${q.requestType})` : `()`;
    const spread = hasParams ? `...${resourceVar}.${q.name}(params),` : `...${resourceVar}.${q.name}(),`;
    return `export const ${hookName} = ${sig} => {\n  return useQuery({\n    ${spread}\n    ${defaultOptions}\n  });\n};`;
  }).join('\n\n');

  return `import { ${resourceVar} } from "@core/api/${resource}/${resource}Query";\n${hookImports.length ? `import { ${hookImports.join(', ')} } from "@sizlcorp/sizl-api-document/dist/models";\n` : ''}import { useQuery } from "@tanstack/react-query";\n\n${hookBlocks}\n`;
}

function genMutationHooksModule({ resource, mutations }) {
  const resourcePascal = pascalCase(resource);
  const resourceVar = camelCase(resource);
  const hookImports = unique(mutations.map(m => m.requestType).filter(Boolean));

  const hookBlocks = mutations.map(m => {
    const hookName = `use${resourcePascal}${pascalCase(m.name)}Mutation`;
    const keyStr = `${m.name}`;
    const hasParams = !!m.requestType;
    const tv = hasParams ? m.requestType : 'void';
    const mutationFn = hasParams
      ? `(params: ${m.requestType}) => ${resourceVar}Mutate.${m.name}(params).mutationFn(undefined)`
      : `(_: void) => ${resourceVar}Mutate.${m.name}().mutationFn(undefined)`;
    return `export const ${hookName} = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ${tv}, unknown>, 'mutationFn' | 'mutationKey'>) => {\n  return useMutation({\n    mutationKey: ["${keyStr}"],\n    mutationFn: ${mutationFn},\n    ...(options ?? {}),\n  });\n};`;
  }).join('\n\n');

  return `import { ${resourceVar}Mutate } from "@core/api/${resource}/${resource}Query";\n${hookImports.length ? `import { ${hookImports.join(', ')} } from "@sizlcorp/sizl-api-document/dist/models";\n` : ''}import { useMutation, UseMutationOptions } from "@tanstack/react-query";\nimport { AxiosResponse } from "axios";\n\n${hookBlocks}\n`;
}

function writeFile(targetPath, content) {
  ensureDir(path.dirname(targetPath));
  if (fs.existsSync(targetPath)) {
    // Overwrite to keep template idempotent
  }
  fs.writeFileSync(targetPath, content, 'utf-8');
  return targetPath;
}

function main() {
  const args = process.argv.slice(2);
  const configIndex = args.findIndex(a => a === '--config');
  if (configIndex === -1 || !args[configIndex + 1]) {
    console.error('Usage: node codex-template/generate.mjs --config <path-to-config.json>');
    process.exit(1);
  }
  const configPath = path.resolve(cwd, args[configIndex + 1]);
  const config = readJSON(configPath);

  const { resource, instance, key } = config;
  const queries = Array.isArray(config.queries) ? config.queries : [];
  const mutations = Array.isArray(config.mutations) ? config.mutations : [];

  if (!resource || !instance) {
    console.error('Config must include "resource" and "instance"');
    process.exit(1);
  }

  const queryModule = genQueryModule({ resource, instance, key, queries, mutations });
  const hooksModule = queries.length ? genHooksModule({ resource, queries }) : null;
  const hooksMutationModule = mutations.length ? genMutationHooksModule({ resource, mutations }) : null;

  const apiOut = path.resolve(cwd, `packages/core/src/api/${resource}/${resource}Query.ts`);
  const hooksOut = path.resolve(cwd, `packages/core/src/hooks/${resource}/use${pascalCase(resource)}Query.ts`);
  const hooksMutOut = path.resolve(cwd, `packages/core/src/hooks/${resource}/use${pascalCase(resource)}Mutation.ts`);

  writeFile(apiOut, queryModule);
  if (hooksModule) writeFile(hooksOut, hooksModule);
  if (hooksMutationModule) writeFile(hooksMutOut, hooksMutationModule);

  console.log('Generated:');
  console.log(' -', path.relative(cwd, apiOut));
  if (hooksModule) console.log(' -', path.relative(cwd, hooksOut));
  if (hooksMutationModule) console.log(' -', path.relative(cwd, hooksMutOut));
}

main();
