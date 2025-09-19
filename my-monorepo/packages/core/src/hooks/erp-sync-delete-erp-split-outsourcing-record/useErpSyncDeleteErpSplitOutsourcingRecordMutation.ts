import { erpSyncDeleteErpSplitOutsourcingRecordMutate } from "@core/api/erp-sync-delete-erp-split-outsourcing-record/erpSyncDeleteErpSplitOutsourcingRecordQuery";
import { DefaultApiErpSyncDeleteErpSplitOutsourcingRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncDeleteErpSplitOutsourcingRecordErpSyncDeleteErpSplitOutsourcingRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncDeleteErpSplitOutsourcingRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncDeleteErpSplitOutsourcingRecordPost"],
    mutationFn: (params: DefaultApiErpSyncDeleteErpSplitOutsourcingRecordPostRequest) => erpSyncDeleteErpSplitOutsourcingRecordMutate.erpSyncDeleteErpSplitOutsourcingRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
