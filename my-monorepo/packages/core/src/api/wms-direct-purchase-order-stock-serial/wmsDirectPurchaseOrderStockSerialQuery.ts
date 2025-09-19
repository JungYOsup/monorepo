import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsDirectPurchaseOrderStockSerialPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSDIRECTPURCHASEORDERSTOCKSERIAL_QUERY_KEY = "WMSDIRECTPURCHASEORDERSTOCKSERIAL";

export const wmsDirectPurchaseOrderStockSerialMutate = createMutationKeys(WMSDIRECTPURCHASEORDERSTOCKSERIAL_QUERY_KEY, {
  wmsDirectPurchaseOrderStockSerialPost: (params: DefaultApiWmsDirectPurchaseOrderStockSerialPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsDirectPurchaseOrderStockSerialPost(params),
    };
  },
});

export const wmsDirectPurchaseOrderStockSerialQueryKeys = wmsDirectPurchaseOrderStockSerialMutate;