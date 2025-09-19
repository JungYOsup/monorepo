import { wmsBulkIncomingMutate } from "@core/api/wms-bulk-incoming/wmsBulkIncomingQuery";
import { DefaultApiWmsBulkIncomingPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsBulkIncomingWmsBulkIncomingPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsBulkIncomingPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsBulkIncomingPost"],
    mutationFn: (params: DefaultApiWmsBulkIncomingPostRequest) => wmsBulkIncomingMutate.wmsBulkIncomingPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
