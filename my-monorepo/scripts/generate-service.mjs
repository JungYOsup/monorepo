#!/usr/bin/env node
/**
 * generate-service.mjs
 *
 * 하나 이상의 API 호출을 조합해 서비스 레이어 템플릿을 인터랙티브하게 생성합니다.
 * 각 단계에서 어떤 API를 사용할지, 이전 단계 결과를 재활용할지 여부를 선택할 수 있습니다.
 *
 * 사용 방법:
 *   node scripts/generate-service.mjs
 */

import fs from "fs";
import path from "path";
import { stdin as input, stdout as output } from "process";
import { createInterface } from "readline/promises";

const repoRoot = process.cwd();
const MODELS_IMPORT_PATH = "@sizlcorp/sizl-api-document/dist/models";

function log(...args) {
  console.log("[서비스 생성기]", ...args);
}

function warn(...args) {
  console.warn("[서비스 생성기]", ...args);
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

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

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
    throw new Error(
      "packages/core/src/instance/axios.ts 파일을 찾을 수 없습니다."
    );
  }
  const src = fs.readFileSync(axiosPath, "utf-8");

  const factoryToApi = {};
  const factoryRe =
    /const\s+(\w+Axios)\s*=\s*\([^)]*\)\s*=>\s*\{[^\n]*\n\s*return\s+new\s+(\w+)\s*\(/g;
  let fm;
  while ((fm = factoryRe.exec(src))) {
    factoryToApi[fm[1]] = fm[2];
  }

  const instanceToFactory = {};
  const instRe = /export\s+const\s+(\w+)\s*=\s*(\w+)\s*\(/g;
  let im;
  while ((im = instRe.exec(src))) {
    instanceToFactory[im[1]] = im[2];
  }

  const apiToInstance = {};
  for (const [instanceName, factoryName] of Object.entries(instanceToFactory)) {
    const apiClass = factoryToApi[factoryName];
    if (apiClass) apiToInstance[apiClass] = instanceName;
  }
  return apiToInstance;
}

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

function parseApiMethods(dtsContent) {
  const methods = [];

  const reParams =
    /\n\s*([a-z][A-Za-z0-9]*)\(requestParameters\??:\s*([A-Za-z0-9_]+)\b/g;
  let m;
  while ((m = reParams.exec(dtsContent))) {
    methods.push({
      methodName: m[1],
      requestType: m[2],
    });
  }

  const reZeroParams =
    /\n\s*([a-z][A-Za-z0-9]*)\(options\?:(?:\s*AxiosRequestConfig|\s*any)\)[^;]*;/g;
  let z;
  while ((z = reZeroParams.exec(dtsContent))) {
    const methodName = z[1];
    if (!methods.find((mm) => mm.methodName === methodName)) {
      methods.push({ methodName, requestType: null });
    }
  }

  return methods;
}

function splitMethod(methodName) {
  const suffixes = [
    "FindPost",
    "DownloadGet",
    "Get",
    "Post",
    "Put",
    "Delete",
    "Patch",
  ];
  for (const suffix of suffixes) {
    if (methodName.endsWith(suffix)) {
      return {
        base: methodName.slice(0, -suffix.length),
        suffix,
      };
    }
  }
  return { base: methodName, suffix: "" };
}

function resourceRootFromBase(base) {
  const match = base.match(/^(.*?)([A-Z][a-zA-Z]*?(Id|Uuid))$/);
  if (match) return match[1] || base;
  return base;
}

function discoverOperations() {
  const apiToInstance = readAxiosInstances();
  const operations = [];

  for (const [apiClass, instance] of Object.entries(apiToInstance)) {
    const dtsPath = findApiDts(apiClass);
    if (!dtsPath) {
      warn(`${apiClass} d.ts 파일을 찾을 수 없어 건너뜁니다.`);
      continue;
    }
    const dts = fs.readFileSync(dtsPath, "utf-8");
    const methods = parseApiMethods(dts);
    if (!methods.length) continue;

    for (const { methodName, requestType } of methods) {
      const { base } = splitMethod(methodName);
      const resource = resourceRootFromBase(base);
      operations.push({
        resource,
        resourceKebab: kebabCase(resource),
        method: methodName,
        requestType,
        instance,
        apiClass,
      });
    }
  }

  operations.sort((a, b) => {
    if (a.instance !== b.instance) {
      return a.instance.localeCompare(b.instance);
    }
    if (a.resourceKebab !== b.resourceKebab) {
      return a.resourceKebab.localeCompare(b.resourceKebab);
    }
    return a.method.localeCompare(b.method);
  });

  return operations;
}

function normalizeToken(token) {
  return token.trim().toLowerCase();
}

function formatOperation(op, index) {
  const requestLabel = op.requestType ? op.requestType : "없음";
  return `[${index}] ${op.resourceKebab} :: ${op.instance}.${op.method} (요청: ${requestLabel})`;
}

function buildDefaultServiceName(selectedOps) {
  if (!selectedOps.length) {
    return "generated-service";
  }
  const primaryResource = selectedOps[0].resourceKebab;
  if (selectedOps.every((op) => op.resourceKebab === primaryResource)) {
    return `${primaryResource}-service`;
  }
  return `${primaryResource}-combined-service`;
}

function toServiceFilePath(serviceKey) {
  const dir = path.join(
    repoRoot,
    "packages",
    "core",
    "src",
    "hooks",
    "services",
    serviceKey
  );
  const file = path.join(dir, `${camelCase(serviceKey)}Service.ts`);
  return { dir, file };
}

function collectRequestTypes(steps) {
  const set = new Set();
  for (const step of steps) {
    if (step.op.requestType) {
      set.add(step.op.requestType);
    }
  }
  return Array.from(set);
}

function buildHelperName(stepIndex, source) {
  if (source.type === "step") {
    return `buildStep${stepIndex}InputFromStep${source.stepIndex}`;
  }
  return `buildStep${stepIndex}InputFromPayload`;
}

function isLikelyRelated(requestType, previousMethod) {
  if (!requestType) return false;
  const { base } = splitMethod(previousMethod);
  const needle = pascalCase(base);
  return requestType.includes(needle);
}

function codeBlock(lines, indent = 0) {
  const pad = " ".repeat(indent);
  return lines.map((line) => (line ? `${pad}${line}` : "")).join("\n");
}

async function main() {
  const operations = discoverOperations();
  if (!operations.length) {
    warn("사용 가능한 API를 찾지 못했습니다. 먼저 Query 파일을 생성해 주세요.");
    return;
  }

  const rl = createInterface({ input, output });
  const question = async (prompt) => {
    const answer = await rl.question(prompt);
    return answer.trim();
  };

  const uniqueResources = [
    ...new Set(operations.map((op) => op.resourceKebab)),
  ].sort();

  log("탐색된 리소스 목록:");
  uniqueResources.forEach((resource) => {
    log(`  - ${resource}`);
  });
  log("");

  const resourceFilter = await question(
    "특정 리소스(kebab-case)만 보고 싶다면 입력하세요 (생략 가능): "
  );
  let filtered = operations;
  if (resourceFilter) {
    filtered = operations.filter((op) => op.resourceKebab === resourceFilter);
    if (!filtered.length) {
      warn(
        `'${resourceFilter}' 리소스에 해당하는 API가 없습니다. 작업을 종료합니다.`
      );
      rl.close();
      return;
    }
  }

  log("");
  log("선택 가능한 API 목록:");
  filtered.forEach((op, idx) => {
    console.log(`  ${formatOperation(op, idx + 1)}`);
  });
  log("");

  let selection = [];
  while (!selection.length) {
    const inputSelection = await question(
      "실행 순서대로 사용할 API를 입력하세요 (번호 또는 메서드명, 쉼표/공백 구분): "
    );
    if (!inputSelection) {
      warn("최소 한 개 이상 선택해야 합니다.");
      continue;
    }
    const tokens = inputSelection
      .split(/[\s,>]+/)
      .map((t) => t.trim())
      .filter(Boolean);
    const chosen = [];
    for (const token of tokens) {
      if (/^\d+$/.test(token)) {
        const idx = Number(token);
        if (idx < 1 || idx > filtered.length) {
          warn(`번호가 목록 범위를 벗어났습니다: ${token}`);
          chosen.length = 0;
          break;
        }
        chosen.push(filtered[idx - 1]);
        continue;
      }
      const normalized = normalizeToken(token);
      const byMethod = filtered.find(
        (op) =>
          op.method.toLowerCase() === normalized ||
          `${op.resourceKebab}.${op.method}`.toLowerCase() === normalized
      );
      if (!byMethod) {
        warn(`'${token}' 에 해당하는 API를 찾을 수 없습니다.`);
        chosen.length = 0;
        break;
      }
      chosen.push(byMethod);
    }

    if (!chosen.length) {
      warn("선택이 올바르지 않습니다. 다시 시도해 주세요.");
      continue;
    }

    const uniqueKeys = new Set(
      chosen.map((op) => `${op.instance}:${op.method}`)
    );
    if (uniqueKeys.size !== chosen.length) {
      warn("동일한 API를 중복 선택했습니다. 각 단계는 서로 달라야 합니다.");
      continue;
    }

    const instances = new Set(chosen.map((op) => op.instance));
    if (instances.size > 1) {
      warn(
        "선택한 API가 서로 다른 axios 인스턴스를 사용합니다. 동일한 인스턴스를 사용하는 API만 선택해 주세요."
      );
      continue;
    }

    selection = chosen;
  }

  const defaultService = buildDefaultServiceName(selection);
  let serviceKey = await question(
    `서비스 이름(kebab-case) [기본값: ${defaultService}]: `
  );
  if (!serviceKey) serviceKey = defaultService;
  serviceKey = kebabCase(serviceKey);
  const servicePascal = pascalCase(serviceKey);
  const serviceCamel = camelCase(serviceKey);

  const defaultMethod = camelCase(serviceKey.replace(/-service$/, ""));
  let methodName = await question(
    `서비스 메서드 이름(camelCase) [기본값: ${defaultMethod}]: `
  );
  if (!methodName) methodName = defaultMethod;

  const firstRequestType = selection[0].requestType;
  if (!firstRequestType) {
    log(
      `첫 번째 API '${selection[0].method}' 는 파라미터가 필요하지 않습니다. 생성되는 메서드도 인자를 받지 않습니다.`
    );
  }

  const steps = selection.map((op, idx) => ({
    index: idx + 1,
    op,
    source: null,
  }));

  for (let i = 1; i < steps.length; i += 1) {
    const step = steps[i];
    const requestType = step.op.requestType;
    if (!requestType) {
      step.source = { type: "none" };
      continue;
    }

    const options = [];
    const optionLabels = [];
    if (firstRequestType) {
      options.push("input");
      optionLabels.push("'input' (처음 받은 payload)");
    }
    for (let prev = 0; prev < i; prev += 1) {
      const prevStep = steps[prev];
      options.push(String(prevStep.index));
      optionLabels.push(
        `'${prevStep.index}' (단계 ${prevStep.index} 결과, ${prevStep.op.method})`
      );
    }
    options.push("manual");
    optionLabels.push("'manual' (직접 작성)");

    let chosenSource = null;
    while (!chosenSource) {
      const answer = await question(
        `단계 ${step.index} (${step.op.method}) 의 요청 데이터를 어디에서 가져올까요? [${optionLabels.join(", ")}]: `
      );
      const token = answer ? normalizeToken(answer) : "";
      if (!token) {
        warn("요청 데이터를 가져올 방법을 선택해야 합니다.");
        continue;
      }

      if (token === "manual") {
        chosenSource = { type: "manual" };
        break;
      }
      if (token === "input") {
        if (!firstRequestType) {
          warn(
            "이 서비스 메서드는 초기 인자를 받지 않습니다. 다른 옵션을 선택해 주세요."
          );
          continue;
        }
        if (firstRequestType !== requestType) {
          chosenSource = { type: "input-helper" };
        } else {
          chosenSource = { type: "input-direct" };
        }
        break;
      }

      const numeric = Number(token);
      if (Number.isInteger(numeric)) {
        if (numeric < 1 || numeric >= step.index) {
          warn("이전 단계 번호(현재 단계보다 작은 값)를 입력해 주세요.");
          continue;
        }
        const prevStep = steps[numeric - 1];
        if (!requestType) {
          warn(
            "선택한 API는 요청값이 필요 없습니다. 다른 옵션을 선택해 주세요."
          );
          continue;
        }

        if (!isLikelyRelated(requestType, prevStep.op.method)) {
          const confirm = await question(
            "선택한 단계는 서로 직접적인 연관성이 없어 보입니다. 그래도 진행할까요? (y/N): "
          );
          if (confirm.toLowerCase() !== "y") {
            continue;
          }
        }

        chosenSource = { type: "step", stepIndex: prevStep.index };
        break;
      }

      const prevByMethod = steps
        .slice(0, i)
        .find((prevStep) => prevStep.op.method.toLowerCase() === token);
      if (prevByMethod) {
        chosenSource = { type: "step", stepIndex: prevByMethod.index };
        break;
      }

      warn("올바른 옵션이 아닙니다. 다시 선택해 주세요.");
    }

    step.source = chosenSource;
  }

  const { dir: serviceDir, file: serviceFile } = toServiceFilePath(serviceKey);
  ensureDir(serviceDir);
  if (fs.existsSync(serviceFile)) {
    const overwrite = await question(
      `${path.relative(repoRoot, serviceFile)} 파일이 이미 존재합니다. 덮어쓸까요? (y/N): `
    );
    if (overwrite.toLowerCase() !== "y") {
      warn("생성을 취소합니다.");
      rl.close();
      return;
    }
  }

  const instanceName = selection[0].instance;
  const clientType = `${servicePascal}Client`;
  const contractName = `${servicePascal}ServiceContract`;
  const factoryName = `create${servicePascal}Service`;
  const serviceConst = `${servicePascal}Service`;
  const resultType = `${servicePascal}Result`;
  const methodSignatureArgs = firstRequestType
    ? `(payload: ${firstRequestType})`
    : "()";

  const requestTypes = collectRequestTypes(steps);
  const imports = [`import { ${instanceName} } from "@core/instance/axios";`];
  if (requestTypes.length) {
    imports.push(
      `import {\n  ${requestTypes.join(",\n  ")}\n} from "${MODELS_IMPORT_PATH}";`
    );
  }

  const methodNames = selection.map((op) => `"${op.method}"`);
  const clientTypeDef = `type ${clientType} = Pick<typeof ${instanceName}, ${methodNames.join(
    " | "
  )}>;`;

  const resultTypes = steps.map(
    (step) =>
      `type Step${step.index}Result = Awaited<ReturnType<${clientType}["${step.op.method}"]>>;`
  );

  const resultShape = `type ${resultType} = {\n${steps
    .map((step) => `  step${step.index}: Step${step.index}Result;`)
    .join("\n")}\n};`;

  const methodSignature = firstRequestType
    ? `${methodName}: (payload: ${firstRequestType}) => Promise<${resultType}>;`
    : `${methodName}: () => Promise<${resultType}>;`;

  const helperMap = new Map();

  const methodBodyLines = [];
  const callArgs = (step, index) => {
    const requestType = step.op.requestType;
    if (!requestType) {
      return "";
    }
    if (index === 0) {
      return "payload";
    }
    const source = step.source;
    if (source.type === "manual") {
      const varName = `step${step.index}Input`;
      methodBodyLines.push(
        `const ${varName}: ${requestType} = /* TODO: 요청 값을 직접 작성하세요 */ {} as ${requestType};`
      );
      return varName;
    }
    if (source.type === "input-direct") {
      return "payload";
    }
    if (source.type === "input-helper") {
      const helperName = buildHelperName(step.index, source);
      const varName = `step${step.index}Input`;
      methodBodyLines.push(`const ${varName} = ${helperName}(payload);`);
      if (!helperMap.has(helperName)) {
        helperMap.set(
          helperName,
          `const ${helperName} = (payload: ${firstRequestType}): ${requestType} => {\n  // TODO: 초기 payload를 ${requestType} 형태로 변환\n  return {} as ${requestType};\n};`
        );
      }
      return varName;
    }
    if (source.type === "step") {
      const helperName = buildHelperName(step.index, source);
      const varName = `step${step.index}Input`;
      methodBodyLines.push(
        `const ${varName} = ${helperName}(step${source.stepIndex});`
      );
      if (!helperMap.has(helperName)) {
        helperMap.set(
          helperName,
          `const ${helperName} = (previous: Step${source.stepIndex}Result): ${requestType} => {\n  // TODO: 단계 ${source.stepIndex} 결과를 ${requestType} 형태로 변환\n  return {} as ${requestType};\n};`
        );
      }
      return varName;
    }
    return "";
  };

  steps.forEach((step, idx) => {
    const arg = callArgs(step, idx);
    const callLine = arg
      ? `const step${step.index} = await client.${step.op.method}(${arg});`
      : `const step${step.index} = await client.${step.op.method}();`;
    methodBodyLines.push(callLine);
  });

  methodBodyLines.push(
    `return {\n${steps.map((step) => `  step${step.index},`).join("\n")}\n};`
  );

  const factoryBody = codeBlock(
    [
      `export const ${factoryName} = (`,
      `  client: ${clientType} = ${instanceName}`,
      `): ${contractName} => ({`,
      `  ${methodName}: async ${methodSignatureArgs} => {`,
      ...methodBodyLines.map((line) => `    ${line}`),
      "  },",
      "});",
    ],
    0
  );

  const serviceConstLine = `export const ${serviceConst} = ${factoryName}();`;

  const helperFunctions = Array.from(helperMap.values());

  const sections = [
    imports.join("\n"),
    clientTypeDef,
    resultTypes.join("\n"),
    resultShape,
    `export interface ${contractName} {\n  ${methodSignature}\n}`,
    helperFunctions.join("\n\n"),
    factoryBody,
    serviceConstLine,
  ].filter(Boolean);

  const fileContent = sections.join("\n\n") + "\n";

  fs.writeFileSync(serviceFile, fileContent, "utf-8");

  log(`서비스 파일이 생성되었습니다: ${path.relative(repoRoot, serviceFile)}`);

  rl.close();
}

main().catch((err) => {
  console.error("[서비스 생성기] 예기치 못한 오류:", err);
  process.exit(1);
});
