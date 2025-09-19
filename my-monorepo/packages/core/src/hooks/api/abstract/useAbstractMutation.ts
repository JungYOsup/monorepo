import { abstractMutate } from "@core/api/abstract/abstractQuery";
import { DefaultApiAbstractItemsAbstractItemIdDeleteRequest, DefaultApiAbstractItemsAbstractItemIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAbstractAbstractItemsAbstractItemIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiAbstractItemsAbstractItemIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["abstractItemsAbstractItemIdDelete"],
    mutationFn: (params: DefaultApiAbstractItemsAbstractItemIdDeleteRequest) => abstractMutate.abstractItemsAbstractItemIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useAbstractAbstractItemsAbstractItemIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiAbstractItemsAbstractItemIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["abstractItemsAbstractItemIdPut"],
    mutationFn: (params: DefaultApiAbstractItemsAbstractItemIdPutRequest) => abstractMutate.abstractItemsAbstractItemIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
