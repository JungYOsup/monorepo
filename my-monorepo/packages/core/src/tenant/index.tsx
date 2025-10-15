import { PageConfig, TenantConfig } from "@core/tenant/types";

export type CompanyName = "core" | "dev";

const ordersListBase: PageConfig = {
  display: true,
  endpoint: "/orders",
  columns: [],
  api: {},
};

const inventoryListBase: PageConfig = {
  display: true,
  endpoint: "/inventory",
  columns: [],
  api: {},
};

const qualityResultsBase: PageConfig = {
  display: true,
  endpoint: "/quality-results",
  columns: [],
  api: {},
};

export const coreConfig: TenantConfig = {
  companyName: "기본",
  pages: {
    "orders/list": { ...ordersListBase },
    "inventory/list": { ...inventoryListBase },
    "quality/results": { ...qualityResultsBase },
  },
};

export const devConfig: TenantConfig = {
  companyName: "개발사",
  pages: {
    "orders/list": {
      ...ordersListBase,
      endpoint: "/dev-orders",
      columns: [],
      api: {},
    },
    "inventory/list": {
      ...inventoryListBase,
      endpoint: "/dev-inventory",
      display: true,
      api: {},
    },
    "quality/results": {
      ...qualityResultsBase,
      endpoint: "/dev-quality-results",
      display: true,
      api: {},
    },
  },
};
