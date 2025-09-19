import { purchaseOrderCategoriesMutate } from "@core/api/purchase-order-categories/purchaseOrderCategoriesQuery";
import { ScmApiPurchaseOrderCategoriesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePurchaseOrderCategoriesPurchaseOrderCategoriesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrderCategoriesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrderCategoriesPost"],
    mutationFn: (params: ScmApiPurchaseOrderCategoriesPostRequest) => purchaseOrderCategoriesMutate.purchaseOrderCategoriesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
