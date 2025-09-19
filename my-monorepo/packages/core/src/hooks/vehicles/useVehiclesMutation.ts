import { vehiclesMutate } from "@core/api/vehicles/vehiclesQuery";
import { ScmApiVehiclesPostRequest, ScmApiVehiclesVehicleIdDeleteRequest, ScmApiVehiclesVehicleIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useVehiclesVehiclesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiVehiclesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["vehiclesPost"],
    mutationFn: (params: ScmApiVehiclesPostRequest) => vehiclesMutate.vehiclesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useVehiclesVehiclesVehicleIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiVehiclesVehicleIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["vehiclesVehicleIdDelete"],
    mutationFn: (params: ScmApiVehiclesVehicleIdDeleteRequest) => vehiclesMutate.vehiclesVehicleIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useVehiclesVehiclesVehicleIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiVehiclesVehicleIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["vehiclesVehicleIdPut"],
    mutationFn: (params: ScmApiVehiclesVehicleIdPutRequest) => vehiclesMutate.vehiclesVehicleIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
