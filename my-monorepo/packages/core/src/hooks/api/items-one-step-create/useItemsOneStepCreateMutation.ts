import { itemsOneStepCreateMutate } from "@core/api/items-one-step-create/itemsOneStepCreateQuery";
import { MasterApiItemsOneStepCreatePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useItemsOneStepCreateItemsOneStepCreatePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemsOneStepCreatePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemsOneStepCreatePost"],
    mutationFn: (params: MasterApiItemsOneStepCreatePostRequest) => itemsOneStepCreateMutate.itemsOneStepCreatePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
