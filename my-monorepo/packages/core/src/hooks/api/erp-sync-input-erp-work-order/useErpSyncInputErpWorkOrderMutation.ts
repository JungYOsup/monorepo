import { erpSyncInputErpWorkOrderMutate } from "@core/api/erp-sync-input-erp-work-order/erpSyncInputErpWorkOrderQuery";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncInputErpWorkOrderErpSyncInputErpWorkOrderPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, void, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncInputErpWorkOrderPost"],
    mutationFn: (_: void) => erpSyncInputErpWorkOrderMutate.erpSyncInputErpWorkOrderPost().mutationFn(undefined),
    ...(options ?? {}),
  });
};
