import { wmsBulkOutgoingMutate } from "@core/api/wms-bulk-outgoing/wmsBulkOutgoingQuery";
import { DefaultApiWmsBulkOutgoingPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsBulkOutgoingWmsBulkOutgoingPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsBulkOutgoingPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsBulkOutgoingPost"],
    mutationFn: (params: DefaultApiWmsBulkOutgoingPostRequest) => wmsBulkOutgoingMutate.wmsBulkOutgoingPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
