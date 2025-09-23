import { purchase } from "@core/api/purchase/purchaseQuery";
import { ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdGetRequest, ScmApiPurchaseOrderItemsPurchaseOrderItemIdGetRequest, ScmApiPurchaseOrdersPurchaseOrderIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchasePurchaseOrderCategoriesPurchaseOrderCategoryIdGetQuery = (params: ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdGetRequest) => {
  return useQuery({
    ...purchase.purchaseOrderCategoriesPurchaseOrderCategoryIdGet(params),
    retry: 1,
  });
};

export const usePurchasePurchaseOrderItemsPurchaseOrderItemIdGetQuery = (params: ScmApiPurchaseOrderItemsPurchaseOrderItemIdGetRequest) => {
  return useQuery({
    ...purchase.purchaseOrderItemsPurchaseOrderItemIdGet(params),
    retry: 1,
  });
};

export const usePurchasePurchaseOrdersPurchaseOrderIdGetQuery = (params: ScmApiPurchaseOrdersPurchaseOrderIdGetRequest) => {
  return useQuery({
    ...purchase.purchaseOrdersPurchaseOrderIdGet(params),
    retry: 1,
  });
};
