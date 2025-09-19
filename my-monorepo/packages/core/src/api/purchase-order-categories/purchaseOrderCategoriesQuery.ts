import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderCategoriesFindPostRequest,
  ScmApiPurchaseOrderCategoriesGetRequest,
  ScmApiPurchaseOrderCategoriesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERCATEGORIES_QUERY_KEY = "PURCHASEORDERCATEGORIES";

export const purchaseOrderCategories = createQueryKeys(PURCHASEORDERCATEGORIES_QUERY_KEY, {
  purchaseOrderCategoriesFindPost: (params: ScmApiPurchaseOrderCategoriesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderCategoriesFindPost(params),
    };
  },
  purchaseOrderCategoriesGet: (params: ScmApiPurchaseOrderCategoriesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderCategoriesGet(params),
    };
  },
});

export const purchaseOrderCategoriesMutate = createMutationKeys(PURCHASEORDERCATEGORIES_QUERY_KEY, {
  purchaseOrderCategoriesPost: (params: ScmApiPurchaseOrderCategoriesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderCategoriesPost(params),
    };
  },
});

export const purchaseOrderCategoriesQueryKeys = mergeQueryKeys(purchaseOrderCategories, purchaseOrderCategoriesMutate);