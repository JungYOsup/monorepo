import { abstractItemsMutate } from "@core/api/abstract-items/abstractItemsQuery";
import { DefaultApiAbstractItemsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAbstractItemsAbstractItemsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiAbstractItemsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["abstractItemsPost"],
    mutationFn: (params: DefaultApiAbstractItemsPostRequest) => abstractItemsMutate.abstractItemsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
