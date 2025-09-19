import { wmsBatchMutate } from "@core/api/wms-batch/wmsBatchQuery";
import { DefaultApiWmsBatchPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsBatchWmsBatchPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsBatchPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsBatchPost"],
    mutationFn: (params: DefaultApiWmsBatchPostRequest) => wmsBatchMutate.wmsBatchPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
