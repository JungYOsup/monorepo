import { wmsBulkInputMutate } from "@core/api/wms-bulk-input/wmsBulkInputQuery";
import { DefaultApiWmsBulkInputPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsBulkInputWmsBulkInputPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsBulkInputPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsBulkInputPost"],
    mutationFn: (params: DefaultApiWmsBulkInputPostRequest) => wmsBulkInputMutate.wmsBulkInputPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
