import { operationsMutate } from "@core/api/operations/operationsQuery";
import { DefaultApiOperationsOperationIdDeleteRequest, DefaultApiOperationsOperationIdPutRequest, DefaultApiOperationsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useOperationsOperationsOperationIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiOperationsOperationIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["operationsOperationIdDelete"],
    mutationFn: (params: DefaultApiOperationsOperationIdDeleteRequest) => operationsMutate.operationsOperationIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useOperationsOperationsOperationIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiOperationsOperationIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["operationsOperationIdPut"],
    mutationFn: (params: DefaultApiOperationsOperationIdPutRequest) => operationsMutate.operationsOperationIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useOperationsOperationsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiOperationsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["operationsPost"],
    mutationFn: (params: DefaultApiOperationsPostRequest) => operationsMutate.operationsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
