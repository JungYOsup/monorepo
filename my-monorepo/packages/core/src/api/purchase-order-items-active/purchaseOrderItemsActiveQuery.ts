import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderItemsActiveGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERITEMSACTIVE_QUERY_KEY = "PURCHASEORDERITEMSACTIVE";

export const purchaseOrderItemsActive = createQueryKeys(PURCHASEORDERITEMSACTIVE_QUERY_KEY, {
  purchaseOrderItemsActiveGet: (params: ScmApiPurchaseOrderItemsActiveGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemsActiveGet(params),
    };
  },
});

export const purchaseOrderItemsActiveQueryKeys = purchaseOrderItemsActive;