import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrdersFindPostRequest,
  ScmApiPurchaseOrdersGetRequest,
  ScmApiPurchaseOrdersPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERS_QUERY_KEY = "PURCHASEORDERS";

export const purchaseOrders = createQueryKeys(PURCHASEORDERS_QUERY_KEY, {
  purchaseOrdersFindPost: (params: ScmApiPurchaseOrdersFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrdersFindPost(params),
    };
  },
  purchaseOrdersGet: (params: ScmApiPurchaseOrdersGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrdersGet(params),
    };
  },
});

export const purchaseOrdersMutate = createMutationKeys(PURCHASEORDERS_QUERY_KEY, {
  purchaseOrdersPost: (params: ScmApiPurchaseOrdersPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrdersPost(params),
    };
  },
});

export const purchaseOrdersQueryKeys = mergeQueryKeys(purchaseOrders, purchaseOrdersMutate);