import { menuListsMutate } from "@core/api/menu-lists/menuListsQuery";
import { MasterApiMenuListsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useMenuListsMenuListsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiMenuListsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["menuListsPost"],
    mutationFn: (params: MasterApiMenuListsPostRequest) => menuListsMutate.menuListsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
