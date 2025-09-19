import { erpSyncPushErpWorkRecordMutate } from "@core/api/erp-sync-push-erp-work-record/erpSyncPushErpWorkRecordQuery";
import { DefaultApiErpSyncPushErpWorkRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushErpWorkRecordErpSyncPushErpWorkRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushErpWorkRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushErpWorkRecordPost"],
    mutationFn: (params: DefaultApiErpSyncPushErpWorkRecordPostRequest) => erpSyncPushErpWorkRecordMutate.erpSyncPushErpWorkRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
