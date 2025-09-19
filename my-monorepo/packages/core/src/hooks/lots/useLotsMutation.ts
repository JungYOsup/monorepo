import { lotsMutate } from "@core/api/lots/lotsQuery";
import { DefaultApiLotsLotIdDeleteRequest, DefaultApiLotsLotIdPutRequest, DefaultApiLotsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLotsLotsLotIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLotsLotIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["lotsLotIdDelete"],
    mutationFn: (params: DefaultApiLotsLotIdDeleteRequest) => lotsMutate.lotsLotIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useLotsLotsLotIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLotsLotIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["lotsLotIdPut"],
    mutationFn: (params: DefaultApiLotsLotIdPutRequest) => lotsMutate.lotsLotIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useLotsLotsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLotsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["lotsPost"],
    mutationFn: (params: DefaultApiLotsPostRequest) => lotsMutate.lotsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
