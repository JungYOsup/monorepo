import { erpSyncInputInputFromErpPurchasedOrderItemMutate } from "@core/api/erp-sync-input-input-from-erp-purchased-order-item/erpSyncInputInputFromErpPurchasedOrderItemQuery";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncInputInputFromErpPurchasedOrderItemErpSyncInputInputFromErpPurchasedOrderItemPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, void, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncInputInputFromErpPurchasedOrderItemPost"],
    mutationFn: (_: void) => erpSyncInputInputFromErpPurchasedOrderItemMutate.erpSyncInputInputFromErpPurchasedOrderItemPost().mutationFn(undefined),
    ...(options ?? {}),
  });
};
