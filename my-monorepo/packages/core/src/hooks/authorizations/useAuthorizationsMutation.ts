import { authorizationsMutate } from "@core/api/authorizations/authorizationsQuery";
import { MasterApiAuthorizationsAuthorizationIdDeleteRequest, MasterApiAuthorizationsAuthorizationIdPutRequest, MasterApiAuthorizationsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAuthorizationsAuthorizationsAuthorizationIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiAuthorizationsAuthorizationIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["authorizationsAuthorizationIdDelete"],
    mutationFn: (params: MasterApiAuthorizationsAuthorizationIdDeleteRequest) => authorizationsMutate.authorizationsAuthorizationIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useAuthorizationsAuthorizationsAuthorizationIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiAuthorizationsAuthorizationIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["authorizationsAuthorizationIdPut"],
    mutationFn: (params: MasterApiAuthorizationsAuthorizationIdPutRequest) => authorizationsMutate.authorizationsAuthorizationIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useAuthorizationsAuthorizationsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiAuthorizationsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["authorizationsPost"],
    mutationFn: (params: MasterApiAuthorizationsPostRequest) => authorizationsMutate.authorizationsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
