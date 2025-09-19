import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderItemsFindPostRequest,
  ScmApiPurchaseOrderItemsGetRequest,
  ScmApiPurchaseOrderItemsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERITEMS_QUERY_KEY = "PURCHASEORDERITEMS";

export const purchaseOrderItems = createQueryKeys(PURCHASEORDERITEMS_QUERY_KEY, {
  purchaseOrderItemsFindPost: (params: ScmApiPurchaseOrderItemsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemsFindPost(params),
    };
  },
  purchaseOrderItemsGet: (params: ScmApiPurchaseOrderItemsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemsGet(params),
    };
  },
});

export const purchaseOrderItemsMutate = createMutationKeys(PURCHASEORDERITEMS_QUERY_KEY, {
  purchaseOrderItemsPost: (params: ScmApiPurchaseOrderItemsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderItemsPost(params),
    };
  },
});

export const purchaseOrderItemsQueryKeys = mergeQueryKeys(purchaseOrderItems, purchaseOrderItemsMutate);