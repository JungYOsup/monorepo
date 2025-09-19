import { erpSyncPushCancelSingleOutsourcingRecordMutate } from "@core/api/erp-sync-push-cancel-single-outsourcing-record/erpSyncPushCancelSingleOutsourcingRecordQuery";
import { DefaultApiErpSyncPushCancelSingleOutsourcingRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushCancelSingleOutsourcingRecordErpSyncPushCancelSingleOutsourcingRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushCancelSingleOutsourcingRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushCancelSingleOutsourcingRecordPost"],
    mutationFn: (params: DefaultApiErpSyncPushCancelSingleOutsourcingRecordPostRequest) => erpSyncPushCancelSingleOutsourcingRecordMutate.erpSyncPushCancelSingleOutsourcingRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
