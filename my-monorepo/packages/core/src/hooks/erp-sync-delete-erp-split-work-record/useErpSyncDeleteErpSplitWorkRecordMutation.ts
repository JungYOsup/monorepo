import { erpSyncDeleteErpSplitWorkRecordMutate } from "@core/api/erp-sync-delete-erp-split-work-record/erpSyncDeleteErpSplitWorkRecordQuery";
import { DefaultApiErpSyncDeleteErpSplitWorkRecordPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncDeleteErpSplitWorkRecordErpSyncDeleteErpSplitWorkRecordPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncDeleteErpSplitWorkRecordPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncDeleteErpSplitWorkRecordPost"],
    mutationFn: (params: DefaultApiErpSyncDeleteErpSplitWorkRecordPostRequest) => erpSyncDeleteErpSplitWorkRecordMutate.erpSyncDeleteErpSplitWorkRecordPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
