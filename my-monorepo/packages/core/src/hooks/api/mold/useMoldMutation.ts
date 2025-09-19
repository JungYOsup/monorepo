import { moldMutate } from "@core/api/mold/moldQuery";
import { DefaultApiMoldCavitiesMoldCavityIdDeleteRequest, DefaultApiMoldCavitiesMoldCavityIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useMoldMoldCavitiesMoldCavityIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiMoldCavitiesMoldCavityIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["moldCavitiesMoldCavityIdDelete"],
    mutationFn: (params: DefaultApiMoldCavitiesMoldCavityIdDeleteRequest) => moldMutate.moldCavitiesMoldCavityIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useMoldMoldCavitiesMoldCavityIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiMoldCavitiesMoldCavityIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["moldCavitiesMoldCavityIdPut"],
    mutationFn: (params: DefaultApiMoldCavitiesMoldCavityIdPutRequest) => moldMutate.moldCavitiesMoldCavityIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
