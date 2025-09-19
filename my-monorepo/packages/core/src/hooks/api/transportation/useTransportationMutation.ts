import { transportationMutate } from "@core/api/transportation/transportationQuery";
import { ScmApiTransportationPostRequest, ScmApiTransportationTransportationIdDeleteRequest, ScmApiTransportationTransportationIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useTransportationTransportationPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiTransportationPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["transportationPost"],
    mutationFn: (params: ScmApiTransportationPostRequest) => transportationMutate.transportationPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useTransportationTransportationTransportationIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiTransportationTransportationIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["transportationTransportationIdDelete"],
    mutationFn: (params: ScmApiTransportationTransportationIdDeleteRequest) => transportationMutate.transportationTransportationIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useTransportationTransportationTransportationIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiTransportationTransportationIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["transportationTransportationIdPut"],
    mutationFn: (params: ScmApiTransportationTransportationIdPutRequest) => transportationMutate.transportationTransportationIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
