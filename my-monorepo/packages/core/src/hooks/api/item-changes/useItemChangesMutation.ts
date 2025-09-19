import { itemChangesMutate } from "@core/api/item-changes/itemChangesQuery";
import { MasterApiItemChangesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useItemChangesItemChangesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiItemChangesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["itemChangesPost"],
    mutationFn: (params: MasterApiItemChangesPostRequest) => itemChangesMutate.itemChangesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
