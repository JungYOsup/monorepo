import { purchaseOrderItemsActive } from "@core/api/purchase-order-items-active/purchaseOrderItemsActiveQuery";
import { ScmApiPurchaseOrderItemsActiveGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrderItemsActivePurchaseOrderItemsActiveGetQuery = (params: ScmApiPurchaseOrderItemsActiveGetRequest) => {
  return useQuery({
    ...purchaseOrderItemsActive.purchaseOrderItemsActiveGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
