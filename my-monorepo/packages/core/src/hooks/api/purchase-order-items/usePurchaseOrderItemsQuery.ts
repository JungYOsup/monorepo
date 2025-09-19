import { purchaseOrderItems } from "@core/api/purchase-order-items/purchaseOrderItemsQuery";
import { ScmApiPurchaseOrderItemsFindPostRequest, ScmApiPurchaseOrderItemsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrderItemsPurchaseOrderItemsFindPostQuery = (params: ScmApiPurchaseOrderItemsFindPostRequest) => {
  return useQuery({
    ...purchaseOrderItems.purchaseOrderItemsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const usePurchaseOrderItemsPurchaseOrderItemsGetQuery = (params: ScmApiPurchaseOrderItemsGetRequest) => {
  return useQuery({
    ...purchaseOrderItems.purchaseOrderItemsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
