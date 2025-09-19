import { MasterInstance } from "@core/instance/axios";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { AxiosRequestConfig } from "axios";

export const AUTHWHOAMI_QUERY_KEY = "AUTHWHOAMI";

export const authWhoami = createQueryKeys(AUTHWHOAMI_QUERY_KEY, {
  authWhoamiGet: (params: AxiosRequestConfig) => {
    return {
      queryKey: ["authWhoamiGet"],
      queryFn: () => MasterInstance.authWhoamiGet(params),
    };
  },
});

export const authWhoamiQueryKeys = authWhoami;
