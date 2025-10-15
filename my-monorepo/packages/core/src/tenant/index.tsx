import { TenantConfig } from "@core/tenant/types";

export type CompanyName = "core" | "dev";

export const coreConfig: TenantConfig = {
  companyName: "기본",
  pages: {
    "orders/list": {
      display: true,
      endpoint: "/orders",
      featureFlags: {
        bulkExport: true,
      },
      columns: [
        { key: "id", label: "ID", visible: true },
        { key: "customer", label: "Customer", visible: true },
        { key: "status", label: "Status", visible: true },
        { key: "total", label: "Total", visible: true },
      ],
      api: {
        primary: "https://api.default.com/orders",
      },
    },
  },
};

export const devConfig: TenantConfig = {
  companyName: "개발사",
  pages: {
    "orders/list": {
      display: true,
      endpoint: "/dev-orders",
      featureFlags: {
        bulkExport: false,
      },
      columns: [
        { key: "id", label: "ID", visible: true },
        { key: "client", label: "Client", visible: true }, // 'customer' -> 'client'
        { key: "status", label: "Status", visible: true },
        { key: "amount", label: "Amount", visible: true }, // 'total' -> 'amount'
        { key: "createdAt", label: "Created At", visible: true }, // 추가 컬럼
      ],
      api: {
        primary: "https://api.dev.com/orders",
        transformRequest: ({ params, headers }) => ({
          params: { ...params, devMode: true }, // 모든 요청에 devMode 쿼리 추가
          headers,
        }),
      },
    },
  },
};
