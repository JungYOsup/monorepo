import { erpSyncPushErpOutsourcingRecordMutate } from "@core/api/erp-sync-push-erp-outsourcing-record/erpSyncPushErpOutsourcingRecordQuery";
import { DefaultApiErpSyncPushErpOutsourcingRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushErpOutsourcingRecordErpSyncPushErpOutsourcingRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushErpOutsourcingRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushErpOutsourcingRecordPost"],
    mutationFn: (params: DefaultApiErpSyncPushErpOutsourcingRecordPostRequest) => erpSyncPushErpOutsourcingRecordMutate.erpSyncPushErpOutsourcingRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
