import { itemCategoriesMutate } from "@core/api/item-categories/itemCategoriesQuery";
import { MasterApiItemCategoriesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useItemCategoriesItemCategoriesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemCategoriesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemCategoriesPost"],
    mutationFn: (params: MasterApiItemCategoriesPostRequest) => itemCategoriesMutate.itemCategoriesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
