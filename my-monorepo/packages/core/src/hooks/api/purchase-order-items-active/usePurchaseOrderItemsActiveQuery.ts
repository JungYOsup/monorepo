import { purchaseOrderItemsActive } from "@core/api/purchase-order-items-active/purchaseOrderItemsActiveQuery";
import { ScmApiPurchaseOrderItemsActiveGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrderItemsActivePurchaseOrderItemsActiveGetQuery = (params: ScmApiPurchaseOrderItemsActiveGetRequest) => {
  return useQuery({
    ...purchaseOrderItemsActive.purchaseOrderItemsActiveGet(params),
    retry: 1,
  });
};
