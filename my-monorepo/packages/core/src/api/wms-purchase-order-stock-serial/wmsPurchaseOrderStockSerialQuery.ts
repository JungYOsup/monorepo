import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsPurchaseOrderStockSerialPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSPURCHASEORDERSTOCKSERIAL_QUERY_KEY = "WMSPURCHASEORDERSTOCKSERIAL";

export const wmsPurchaseOrderStockSerialMutate = createMutationKeys(WMSPURCHASEORDERSTOCKSERIAL_QUERY_KEY, {
  wmsPurchaseOrderStockSerialPost: (params: DefaultApiWmsPurchaseOrderStockSerialPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsPurchaseOrderStockSerialPost(params),
    };
  },
});

export const wmsPurchaseOrderStockSerialQueryKeys = wmsPurchaseOrderStockSerialMutate;