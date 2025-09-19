import { itemsMutate } from "@core/api/items/itemsQuery";
import { MasterApiItemsItemIdDeleteRequest, MasterApiItemsItemIdPutRequest, MasterApiItemsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useItemsItemsItemIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemsItemIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemsItemIdDelete"],
    mutationFn: (params: MasterApiItemsItemIdDeleteRequest) => itemsMutate.itemsItemIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useItemsItemsItemIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemsItemIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemsItemIdPut"],
    mutationFn: (params: MasterApiItemsItemIdPutRequest) => itemsMutate.itemsItemIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useItemsItemsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemsPost"],
    mutationFn: (params: MasterApiItemsPostRequest) => itemsMutate.itemsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
