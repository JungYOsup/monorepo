import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsLogsWmsLogIdGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMS_QUERY_KEY = "WMS";

export const wms = createQueryKeys(WMS_QUERY_KEY, {
  wmsLogsWmsLogIdGet: (params: DefaultApiWmsLogsWmsLogIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.wmsLogsWmsLogIdGet(params),
    };
  },
});

export const wmsQueryKeys = wms;