import { itemsRemoveAllMutate } from "@core/api/items-remove-all/itemsRemoveAllQuery";
import { MasterApiItemsRemoveAllDeleteRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useItemsRemoveAllItemsRemoveAllDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemsRemoveAllDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemsRemoveAllDelete"],
    mutationFn: (params: MasterApiItemsRemoveAllDeleteRequest) => itemsRemoveAllMutate.itemsRemoveAllDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
