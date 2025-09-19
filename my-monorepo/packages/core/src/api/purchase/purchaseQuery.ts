import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdGetRequest,
  ScmApiPurchaseOrderItemsPurchaseOrderItemIdGetRequest,
  ScmApiPurchaseOrdersPurchaseOrderIdGetRequest,
  ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdDeleteRequest,
  ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdPutRequest,
  ScmApiPurchaseOrderItemsPurchaseOrderItemIdDeleteRequest,
  ScmApiPurchaseOrderItemsPurchaseOrderItemIdPutRequest,
  ScmApiPurchaseOrdersPurchaseOrderIdDeleteRequest,
  ScmApiPurchaseOrdersPurchaseOrderIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASE_QUERY_KEY = "PURCHASE";

export const purchase = createQueryKeys(PURCHASE_QUERY_KEY, {
  purchaseOrderCategoriesPurchaseOrderCategoryIdGet: (params: ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderCategoriesPurchaseOrderCategoryIdGet(params),
    };
  },
  purchaseOrderItemsPurchaseOrderItemIdGet: (params: ScmApiPurchaseOrderItemsPurchaseOrderItemIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemsPurchaseOrderItemIdGet(params),
    };
  },
  purchaseOrdersPurchaseOrderIdGet: (params: ScmApiPurchaseOrdersPurchaseOrderIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrdersPurchaseOrderIdGet(params),
    };
  },
});

export const purchaseMutate = createMutationKeys(PURCHASE_QUERY_KEY, {
  purchaseOrderCategoriesPurchaseOrderCategoryIdDelete: (params: ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderCategoriesPurchaseOrderCategoryIdDelete(params),
    };
  },
  purchaseOrderCategoriesPurchaseOrderCategoryIdPut: (params: ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderCategoriesPurchaseOrderCategoryIdPut(params),
    };
  },
  purchaseOrderItemsPurchaseOrderItemIdDelete: (params: ScmApiPurchaseOrderItemsPurchaseOrderItemIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderItemsPurchaseOrderItemIdDelete(params),
    };
  },
  purchaseOrderItemsPurchaseOrderItemIdPut: (params: ScmApiPurchaseOrderItemsPurchaseOrderItemIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderItemsPurchaseOrderItemIdPut(params),
    };
  },
  purchaseOrdersPurchaseOrderIdDelete: (params: ScmApiPurchaseOrdersPurchaseOrderIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrdersPurchaseOrderIdDelete(params),
    };
  },
  purchaseOrdersPurchaseOrderIdPut: (params: ScmApiPurchaseOrdersPurchaseOrderIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrdersPurchaseOrderIdPut(params),
    };
  },
});

export const purchaseQueryKeys = mergeQueryKeys(purchase, purchaseMutate);