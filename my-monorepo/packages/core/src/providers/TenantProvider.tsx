import { CompanyName, coreConfig, devConfig } from "@core/tenant";
import { TenantConfig } from "@core/tenant/types";
import { createContext, useContext } from "react";

const tenantConfigMap: Record<CompanyName, TenantConfig> = {
  core: coreConfig,
  dev: devConfig,
};

const DEFAULT_TENANT: CompanyName = "core";

const TenantContext = createContext<TenantConfig>(
  tenantConfigMap[DEFAULT_TENANT]
);

export const TenantProvider: React.FC<{
  companyName?: CompanyName;
  children: React.ReactNode;
}> = ({ companyName = DEFAULT_TENANT, children }) => {
  const config =
    tenantConfigMap[companyName] ?? tenantConfigMap[DEFAULT_TENANT];

  return (
    <TenantContext.Provider value={config}>{children}</TenantContext.Provider>
  );
};

export const useTenantConfig = () => useContext(TenantContext);
