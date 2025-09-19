import { routingMutate } from "@core/api/routing/routingQuery";
import { DefaultApiRoutingBomsRoutingBomIdDeleteRequest, DefaultApiRoutingBomsRoutingBomIdPutRequest, DefaultApiRoutingOutsourcesRoutingOutsourceIdDeleteRequest, DefaultApiRoutingOutsourcesRoutingOutsourceIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useRoutingRoutingBomsRoutingBomIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingBomsRoutingBomIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingBomsRoutingBomIdDelete"],
    mutationFn: (params: DefaultApiRoutingBomsRoutingBomIdDeleteRequest) => routingMutate.routingBomsRoutingBomIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useRoutingRoutingBomsRoutingBomIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingBomsRoutingBomIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingBomsRoutingBomIdPut"],
    mutationFn: (params: DefaultApiRoutingBomsRoutingBomIdPutRequest) => routingMutate.routingBomsRoutingBomIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useRoutingRoutingOutsourcesRoutingOutsourceIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingOutsourcesRoutingOutsourceIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingOutsourcesRoutingOutsourceIdDelete"],
    mutationFn: (params: DefaultApiRoutingOutsourcesRoutingOutsourceIdDeleteRequest) => routingMutate.routingOutsourcesRoutingOutsourceIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useRoutingRoutingOutsourcesRoutingOutsourceIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiRoutingOutsourcesRoutingOutsourceIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["routingOutsourcesRoutingOutsourceIdPut"],
    mutationFn: (params: DefaultApiRoutingOutsourcesRoutingOutsourceIdPutRequest) => routingMutate.routingOutsourcesRoutingOutsourceIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
