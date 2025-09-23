import { purchaseOrders } from "@core/api/purchase-orders/purchaseOrdersQuery";
import { ScmApiPurchaseOrdersFindPostRequest, ScmApiPurchaseOrdersGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrdersPurchaseOrdersFindPostQuery = (params: ScmApiPurchaseOrdersFindPostRequest) => {
  return useQuery({
    ...purchaseOrders.purchaseOrdersFindPost(params),
    enabled: !!params,
  });
};

export const usePurchaseOrdersPurchaseOrdersGetQuery = (params: ScmApiPurchaseOrdersGetRequest) => {
  return useQuery({
    ...purchaseOrders.purchaseOrdersGet(params),
    retry: 1,
  });
};
