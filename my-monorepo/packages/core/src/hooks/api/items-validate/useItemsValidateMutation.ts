import { itemsValidateMutate } from "@core/api/items-validate/itemsValidateQuery";
import { MasterApiItemsValidatePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useItemsValidateItemsValidatePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemsValidatePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemsValidatePost"],
    mutationFn: (params: MasterApiItemsValidatePostRequest) => itemsValidateMutate.itemsValidatePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
