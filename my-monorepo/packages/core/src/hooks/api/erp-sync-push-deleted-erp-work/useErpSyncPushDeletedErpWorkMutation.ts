import { erpSyncPushDeletedErpWorkMutate } from "@core/api/erp-sync-push-deleted-erp-work/erpSyncPushDeletedErpWorkQuery";
import { DefaultApiErpSyncPushDeletedErpWorkPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushDeletedErpWorkErpSyncPushDeletedErpWorkPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushDeletedErpWorkPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushDeletedErpWorkPost"],
    mutationFn: (params: DefaultApiErpSyncPushDeletedErpWorkPostRequest) => erpSyncPushDeletedErpWorkMutate.erpSyncPushDeletedErpWorkPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
