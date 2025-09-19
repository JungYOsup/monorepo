import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsStockSerialPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSSTOCKSERIAL_QUERY_KEY = "WMSSTOCKSERIAL";

export const wmsStockSerialMutate = createMutationKeys(WMSSTOCKSERIAL_QUERY_KEY, {
  wmsStockSerialPost: (params: DefaultApiWmsStockSerialPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsStockSerialPost(params),
    };
  },
});

export const wmsStockSerialQueryKeys = wmsStockSerialMutate;