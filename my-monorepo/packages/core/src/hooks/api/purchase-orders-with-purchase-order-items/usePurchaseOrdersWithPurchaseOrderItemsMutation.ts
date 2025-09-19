import { purchaseOrdersWithPurchaseOrderItemsMutate } from "@core/api/purchase-orders-with-purchase-order-items/purchaseOrdersWithPurchaseOrderItemsQuery";
import { ScmApiPurchaseOrdersWithPurchaseOrderItemsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePurchaseOrdersWithPurchaseOrderItemsPurchaseOrdersWithPurchaseOrderItemsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrdersWithPurchaseOrderItemsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrdersWithPurchaseOrderItemsPost"],
    mutationFn: (params: ScmApiPurchaseOrdersWithPurchaseOrderItemsPostRequest) => purchaseOrdersWithPurchaseOrderItemsMutate.purchaseOrdersWithPurchaseOrderItemsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
