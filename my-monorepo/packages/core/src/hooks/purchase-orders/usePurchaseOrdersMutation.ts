import { purchaseOrdersMutate } from "@core/api/purchase-orders/purchaseOrdersQuery";
import { ScmApiPurchaseOrdersPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePurchaseOrdersPurchaseOrdersPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrdersPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrdersPost"],
    mutationFn: (params: ScmApiPurchaseOrdersPostRequest) => purchaseOrdersMutate.purchaseOrdersPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
