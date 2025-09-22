type GenerateHookOptions = {
  path: string; // e.g., "/items/find"
  instanceName?: string; // e.g., "DefaultInstance"
};

function toCamelCase(input: string) {
  return input
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w, i) => (i === 0 ? w.charAt(0).toLowerCase() + w.slice(1) : w.charAt(0).toUpperCase() + w.slice(1)))
    .join("");
}

function toPascalCase(input: string) {
  return input
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

export function generateFindQueryHookTemplate({ path, instanceName = "DefaultInstance" }: GenerateHookOptions) {
  const m = path.match(/^\/(.+)\/find$/);
  const resource = m ? m[1] : path.replace(/\//g, "");
  const camel = toCamelCase(resource);
  const pascal = toPascalCase(resource);
  const method = `${camel}FindPost`;

  return `import { useQuery } from '@tanstack/react-query';
import { ${instanceName} } from '@core/instance/axios';

export type Use${pascal}FindArgs = {
  populate?: string[];
  fields?: string[];
  excludeFields?: string[];
  sort?: string;
  search?: string;
  searchFields?: string[];
  query?: any;
};

export function use${pascal}FindQuery(args?: Use${pascal}FindArgs) {
  return useQuery({
    queryKey: ['${camel}', 'find', args],
    queryFn: async () => {
      const res = await ${instanceName}.${method}(
        args?.populate,
        args?.fields,
        args?.excludeFields,
        args?.sort,
        args?.search,
        args?.searchFields,
        args?.query
      );
      return res.data;
    },
  });
}
`;
}

