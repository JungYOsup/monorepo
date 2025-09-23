import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import { AxiosResponse } from "axios";

export const AUTHWHOAMI_QUERY_KEY = "AUTHWHOAMI";

export const authWhoami = createQueryKeys(AUTHWHOAMI_QUERY_KEY, {
  authWhoamiGet: () => {
    return {
      queryKey: ["authWhoamiGet"],
      queryFn: () => MasterInstance.authWhoamiGet(),
    };
  },
});

export const authWhoamiQueryKeys = authWhoami;