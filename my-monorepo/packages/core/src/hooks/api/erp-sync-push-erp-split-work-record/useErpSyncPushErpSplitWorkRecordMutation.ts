import { erpSyncPushErpSplitWorkRecordMutate } from "@core/api/erp-sync-push-erp-split-work-record/erpSyncPushErpSplitWorkRecordQuery";
import { DefaultApiErpSyncPushErpSplitWorkRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushErpSplitWorkRecordErpSyncPushErpSplitWorkRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushErpSplitWorkRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushErpSplitWorkRecordPost"],
    mutationFn: (params: DefaultApiErpSyncPushErpSplitWorkRecordPostRequest) => erpSyncPushErpSplitWorkRecordMutate.erpSyncPushErpSplitWorkRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
