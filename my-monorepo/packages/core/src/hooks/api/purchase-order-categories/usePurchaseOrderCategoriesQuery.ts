import { purchaseOrderCategories } from "@core/api/purchase-order-categories/purchaseOrderCategoriesQuery";
import { ScmApiPurchaseOrderCategoriesFindPostRequest, ScmApiPurchaseOrderCategoriesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrderCategoriesPurchaseOrderCategoriesFindPostQuery = (params: ScmApiPurchaseOrderCategoriesFindPostRequest) => {
  return useQuery({
    ...purchaseOrderCategories.purchaseOrderCategoriesFindPost(params),
    enabled: !!params,
  });
};

export const usePurchaseOrderCategoriesPurchaseOrderCategoriesGetQuery = (params: ScmApiPurchaseOrderCategoriesGetRequest) => {
  return useQuery({
    ...purchaseOrderCategories.purchaseOrderCategoriesGet(params),
    retry: 1,
  });
};
