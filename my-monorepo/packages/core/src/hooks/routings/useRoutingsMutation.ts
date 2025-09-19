import { routingsMutate } from "@core/api/routings/routingsQuery";
import { DefaultApiRoutingsPostRequest, DefaultApiRoutingsRoutingIdDeleteRequest, DefaultApiRoutingsRoutingIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useRoutingsRoutingsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingsPost"],
    mutationFn: (params: DefaultApiRoutingsPostRequest) => routingsMutate.routingsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useRoutingsRoutingsRoutingIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingsRoutingIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingsRoutingIdDelete"],
    mutationFn: (params: DefaultApiRoutingsRoutingIdDeleteRequest) => routingsMutate.routingsRoutingIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useRoutingsRoutingsRoutingIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingsRoutingIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingsRoutingIdPut"],
    mutationFn: (params: DefaultApiRoutingsRoutingIdPutRequest) => routingsMutate.routingsRoutingIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
