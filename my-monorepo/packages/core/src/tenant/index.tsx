import { AuthLoginService } from "@core/hooks/services/login/authLoginService";
import { PageConfig, TenantConfig } from "@core/tenant/types";

export type CompanyName = "core" | "dev";

const loginBase: PageConfig = {
  display: true,
  endpoint: "/login",
  api: {
    login: AuthLoginService.login,
  },
};

const ordersListBase: PageConfig = {
  display: true,
  endpoint: "/orders",
  api: {},
};

const inventoryListBase: PageConfig = {
  display: true,
  endpoint: "/inventory",
  api: {},
};

const qualityResultsBase: PageConfig = {
  display: true,
  endpoint: "/quality-results",
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
    login: { ...loginBase },

    "orders/list": {
      ...ordersListBase,
      endpoint: "/dev-orders",
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
