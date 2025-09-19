import { moldsMutate } from "@core/api/molds/moldsQuery";
import { MasterApiMoldsMoldIdDeleteRequest, MasterApiMoldsMoldIdPutRequest, MasterApiMoldsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useMoldsMoldsMoldIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiMoldsMoldIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["moldsMoldIdDelete"],
    mutationFn: (params: MasterApiMoldsMoldIdDeleteRequest) => moldsMutate.moldsMoldIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useMoldsMoldsMoldIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiMoldsMoldIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["moldsMoldIdPut"],
    mutationFn: (params: MasterApiMoldsMoldIdPutRequest) => moldsMutate.moldsMoldIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useMoldsMoldsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiMoldsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["moldsPost"],
    mutationFn: (params: MasterApiMoldsPostRequest) => moldsMutate.moldsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
