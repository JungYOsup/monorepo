import { erpSyncInputInputFromErpOutsourcingOrderMutate } from "@core/api/erp-sync-input-input-from-erp-outsourcing-order/erpSyncInputInputFromErpOutsourcingOrderQuery";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncInputInputFromErpOutsourcingOrderErpSyncInputInputFromErpOutsourcingOrderPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, void, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncInputInputFromErpOutsourcingOrderPost"],
    mutationFn: (_: void) => erpSyncInputInputFromErpOutsourcingOrderMutate.erpSyncInputInputFromErpOutsourcingOrderPost().mutationFn(undefined),
    ...(options ?? {}),
  });
};
