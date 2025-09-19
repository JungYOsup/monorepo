import { erpSyncPushPushSingleOutsourcingRecordMutate } from "@core/api/erp-sync-push-push-single-outsourcing-record/erpSyncPushPushSingleOutsourcingRecordQuery";
import { DefaultApiErpSyncPushPushSingleOutsourcingRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushPushSingleOutsourcingRecordErpSyncPushPushSingleOutsourcingRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushPushSingleOutsourcingRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushPushSingleOutsourcingRecordPost"],
    mutationFn: (params: DefaultApiErpSyncPushPushSingleOutsourcingRecordPostRequest) => erpSyncPushPushSingleOutsourcingRecordMutate.erpSyncPushPushSingleOutsourcingRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
