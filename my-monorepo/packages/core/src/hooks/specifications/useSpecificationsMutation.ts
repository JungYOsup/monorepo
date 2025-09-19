import { specificationsMutate } from "@core/api/specifications/specificationsQuery";
import { SpcApiSpecificationsPostRequest, SpcApiSpecificationsSpecificationIdDeleteRequest, SpcApiSpecificationsSpecificationIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useSpecificationsSpecificationsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiSpecificationsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["specificationsPost"],
    mutationFn: (params: SpcApiSpecificationsPostRequest) => specificationsMutate.specificationsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useSpecificationsSpecificationsSpecificationIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiSpecificationsSpecificationIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["specificationsSpecificationIdDelete"],
    mutationFn: (params: SpcApiSpecificationsSpecificationIdDeleteRequest) => specificationsMutate.specificationsSpecificationIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useSpecificationsSpecificationsSpecificationIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiSpecificationsSpecificationIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["specificationsSpecificationIdPut"],
    mutationFn: (params: SpcApiSpecificationsSpecificationIdPutRequest) => specificationsMutate.specificationsSpecificationIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
