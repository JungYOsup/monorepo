import { wipInventoriesMutate } from "@core/api/wip-inventories/wipInventoriesQuery";
import { DefaultApiWipInventoriesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWipInventoriesWipInventoriesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWipInventoriesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wipInventoriesPost"],
    mutationFn: (params: DefaultApiWipInventoriesPostRequest) => wipInventoriesMutate.wipInventoriesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
