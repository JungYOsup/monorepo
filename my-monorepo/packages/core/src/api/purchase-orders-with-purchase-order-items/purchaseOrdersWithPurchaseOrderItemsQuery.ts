import { ScmInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrdersWithPurchaseOrderItemsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERSWITHPURCHASEORDERITEMS_QUERY_KEY = "PURCHASEORDERSWITHPURCHASEORDERITEMS";

export const purchaseOrdersWithPurchaseOrderItemsMutate = createMutationKeys(PURCHASEORDERSWITHPURCHASEORDERITEMS_QUERY_KEY, {
  purchaseOrdersWithPurchaseOrderItemsPost: (params: ScmApiPurchaseOrdersWithPurchaseOrderItemsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrdersWithPurchaseOrderItemsPost(params),
    };
  },
});

export const purchaseOrdersWithPurchaseOrderItemsQueryKeys = purchaseOrdersWithPurchaseOrderItemsMutate;