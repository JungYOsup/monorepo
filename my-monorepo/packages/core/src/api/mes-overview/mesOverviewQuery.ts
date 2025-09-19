import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import { AxiosResponse } from "axios";

export const MESOVERVIEW_QUERY_KEY = "MESOVERVIEW";

export const mesOverview = createQueryKeys(MESOVERVIEW_QUERY_KEY, {
  mesOverviewGet: () => {
    return {
      queryKey: ["mesOverviewGet"],
      queryFn: () => DefaultInstance.mesOverviewGet(),
    };
  },
});

export const mesOverviewQueryKeys = mesOverview;