import { purchaseOrderCategories } from "@core/api/purchase-order-categories/purchaseOrderCategoriesQuery";
import { ScmApiPurchaseOrderCategoriesFindPostRequest, ScmApiPurchaseOrderCategoriesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrderCategoriesPurchaseOrderCategoriesFindPostQuery = (params: ScmApiPurchaseOrderCategoriesFindPostRequest) => {
  return useQuery({
    ...purchaseOrderCategories.purchaseOrderCategoriesFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const usePurchaseOrderCategoriesPurchaseOrderCategoriesGetQuery = (params: ScmApiPurchaseOrderCategoriesGetRequest) => {
  return useQuery({
    ...purchaseOrderCategories.purchaseOrderCategoriesGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
