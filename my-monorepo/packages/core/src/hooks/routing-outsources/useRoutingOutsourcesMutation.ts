import { routingOutsourcesMutate } from "@core/api/routing-outsources/routingOutsourcesQuery";
import { DefaultApiRoutingOutsourcesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useRoutingOutsourcesRoutingOutsourcesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingOutsourcesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingOutsourcesPost"],
    mutationFn: (params: DefaultApiRoutingOutsourcesPostRequest) => routingOutsourcesMutate.routingOutsourcesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
