import { menuMutate } from "@core/api/menu/menuQuery";
import { MasterApiMenuListsMenuListIdDeleteRequest, MasterApiMenuListsMenuListIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useMenuMenuListsMenuListIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiMenuListsMenuListIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["menuListsMenuListIdDelete"],
    mutationFn: (params: MasterApiMenuListsMenuListIdDeleteRequest) => menuMutate.menuListsMenuListIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useMenuMenuListsMenuListIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiMenuListsMenuListIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["menuListsMenuListIdPut"],
    mutationFn: (params: MasterApiMenuListsMenuListIdPutRequest) => menuMutate.menuListsMenuListIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
