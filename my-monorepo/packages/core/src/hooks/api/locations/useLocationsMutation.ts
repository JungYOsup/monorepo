import { locationsMutate } from "@core/api/locations/locationsQuery";
import { MasterApiLocationsLocationIdDeleteRequest, MasterApiLocationsLocationIdPutRequest, MasterApiLocationsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLocationsLocationsLocationIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiLocationsLocationIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["locationsLocationIdDelete"],
    mutationFn: (params: MasterApiLocationsLocationIdDeleteRequest) => locationsMutate.locationsLocationIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useLocationsLocationsLocationIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiLocationsLocationIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["locationsLocationIdPut"],
    mutationFn: (params: MasterApiLocationsLocationIdPutRequest) => locationsMutate.locationsLocationIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useLocationsLocationsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiLocationsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["locationsPost"],
    mutationFn: (params: MasterApiLocationsPostRequest) => locationsMutate.locationsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
