import { erpSyncPushErpSplitOutsourcingRecordMutate } from "@core/api/erp-sync-push-erp-split-outsourcing-record/erpSyncPushErpSplitOutsourcingRecordQuery";
import { DefaultApiErpSyncPushErpSplitOutsourcingRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushErpSplitOutsourcingRecordErpSyncPushErpSplitOutsourcingRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushErpSplitOutsourcingRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushErpSplitOutsourcingRecordPost"],
    mutationFn: (params: DefaultApiErpSyncPushErpSplitOutsourcingRecordPostRequest) => erpSyncPushErpSplitOutsourcingRecordMutate.erpSyncPushErpSplitOutsourcingRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
