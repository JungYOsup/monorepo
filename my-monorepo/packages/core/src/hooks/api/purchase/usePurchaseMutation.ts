import { purchaseMutate } from "@core/api/purchase/purchaseQuery";
import { ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdDeleteRequest, ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdPutRequest, ScmApiPurchaseOrderItemsPurchaseOrderItemIdDeleteRequest, ScmApiPurchaseOrderItemsPurchaseOrderItemIdPutRequest, ScmApiPurchaseOrdersPurchaseOrderIdDeleteRequest, ScmApiPurchaseOrdersPurchaseOrderIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePurchasePurchaseOrderCategoriesPurchaseOrderCategoryIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrderCategoriesPurchaseOrderCategoryIdDelete"],
    mutationFn: (params: ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdDeleteRequest) => purchaseMutate.purchaseOrderCategoriesPurchaseOrderCategoryIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePurchasePurchaseOrderCategoriesPurchaseOrderCategoryIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrderCategoriesPurchaseOrderCategoryIdPut"],
    mutationFn: (params: ScmApiPurchaseOrderCategoriesPurchaseOrderCategoryIdPutRequest) => purchaseMutate.purchaseOrderCategoriesPurchaseOrderCategoryIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePurchasePurchaseOrderItemsPurchaseOrderItemIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrderItemsPurchaseOrderItemIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrderItemsPurchaseOrderItemIdDelete"],
    mutationFn: (params: ScmApiPurchaseOrderItemsPurchaseOrderItemIdDeleteRequest) => purchaseMutate.purchaseOrderItemsPurchaseOrderItemIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePurchasePurchaseOrderItemsPurchaseOrderItemIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrderItemsPurchaseOrderItemIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrderItemsPurchaseOrderItemIdPut"],
    mutationFn: (params: ScmApiPurchaseOrderItemsPurchaseOrderItemIdPutRequest) => purchaseMutate.purchaseOrderItemsPurchaseOrderItemIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePurchasePurchaseOrdersPurchaseOrderIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrdersPurchaseOrderIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrdersPurchaseOrderIdDelete"],
    mutationFn: (params: ScmApiPurchaseOrdersPurchaseOrderIdDeleteRequest) => purchaseMutate.purchaseOrdersPurchaseOrderIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePurchasePurchaseOrdersPurchaseOrderIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrdersPurchaseOrderIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrdersPurchaseOrderIdPut"],
    mutationFn: (params: ScmApiPurchaseOrdersPurchaseOrderIdPutRequest) => purchaseMutate.purchaseOrdersPurchaseOrderIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
