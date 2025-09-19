import { routingBomsMutate } from "@core/api/routing-boms/routingBomsQuery";
import { DefaultApiRoutingBomsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useRoutingBomsRoutingBomsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingBomsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingBomsPost"],
    mutationFn: (params: DefaultApiRoutingBomsPostRequest) => routingBomsMutate.routingBomsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
