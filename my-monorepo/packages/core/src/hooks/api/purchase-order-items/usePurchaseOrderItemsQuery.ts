import { purchaseOrderItems } from "@core/api/purchase-order-items/purchaseOrderItemsQuery";
import { ScmApiPurchaseOrderItemsFindPostRequest, ScmApiPurchaseOrderItemsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrderItemsPurchaseOrderItemsFindPostQuery = (params: ScmApiPurchaseOrderItemsFindPostRequest) => {
  return useQuery({
    ...purchaseOrderItems.purchaseOrderItemsFindPost(params),
    enabled: !!params,
  });
};

export const usePurchaseOrderItemsPurchaseOrderItemsGetQuery = (params: ScmApiPurchaseOrderItemsGetRequest) => {
  return useQuery({
    ...purchaseOrderItems.purchaseOrderItemsGet(params),
    retry: 1,
  });
};
