import { wipMutate } from "@core/api/wip/wipQuery";
import { DefaultApiWipInventoriesWipInventoryIdDeleteRequest, DefaultApiWipInventoriesWipInventoryIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWipWipInventoriesWipInventoryIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWipInventoriesWipInventoryIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wipInventoriesWipInventoryIdDelete"],
    mutationFn: (params: DefaultApiWipInventoriesWipInventoryIdDeleteRequest) => wipMutate.wipInventoriesWipInventoryIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useWipWipInventoriesWipInventoryIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWipInventoriesWipInventoryIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wipInventoriesWipInventoryIdPut"],
    mutationFn: (params: DefaultApiWipInventoriesWipInventoryIdPutRequest) => wipMutate.wipInventoriesWipInventoryIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
