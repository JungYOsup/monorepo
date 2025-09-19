import { purchaseOrderItemsMutate } from "@core/api/purchase-order-items/purchaseOrderItemsQuery";
import { ScmApiPurchaseOrderItemsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePurchaseOrderItemsPurchaseOrderItemsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrderItemsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrderItemsPost"],
    mutationFn: (params: ScmApiPurchaseOrderItemsPostRequest) => purchaseOrderItemsMutate.purchaseOrderItemsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
