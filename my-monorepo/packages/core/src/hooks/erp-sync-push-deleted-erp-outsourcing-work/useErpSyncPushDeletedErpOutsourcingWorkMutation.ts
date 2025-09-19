import { erpSyncPushDeletedErpOutsourcingWorkMutate } from "@core/api/erp-sync-push-deleted-erp-outsourcing-work/erpSyncPushDeletedErpOutsourcingWorkQuery";
import { DefaultApiErpSyncPushDeletedErpOutsourcingWorkPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushDeletedErpOutsourcingWorkErpSyncPushDeletedErpOutsourcingWorkPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushDeletedErpOutsourcingWorkPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushDeletedErpOutsourcingWorkPost"],
    mutationFn: (params: DefaultApiErpSyncPushDeletedErpOutsourcingWorkPostRequest) => erpSyncPushDeletedErpOutsourcingWorkMutate.erpSyncPushDeletedErpOutsourcingWorkPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
