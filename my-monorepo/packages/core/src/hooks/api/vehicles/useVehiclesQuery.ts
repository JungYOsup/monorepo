import { vehicles } from "@core/api/vehicles/vehiclesQuery";
import { ScmApiVehiclesFindPostRequest, ScmApiVehiclesGetRequest, ScmApiVehiclesVehicleIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useVehiclesVehiclesFindPostQuery = (params: ScmApiVehiclesFindPostRequest) => {
  return useQuery({
    ...vehicles.vehiclesFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useVehiclesVehiclesGetQuery = (params: ScmApiVehiclesGetRequest) => {
  return useQuery({
    ...vehicles.vehiclesGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useVehiclesVehiclesVehicleIdGetQuery = (params: ScmApiVehiclesVehicleIdGetRequest) => {
  return useQuery({
    ...vehicles.vehiclesVehicleIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
