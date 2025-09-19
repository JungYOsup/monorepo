import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiVehiclesFindPostRequest,
  ScmApiVehiclesGetRequest,
  ScmApiVehiclesVehicleIdGetRequest,
  ScmApiVehiclesPostRequest,
  ScmApiVehiclesVehicleIdDeleteRequest,
  ScmApiVehiclesVehicleIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const VEHICLES_QUERY_KEY = "VEHICLES";

export const vehicles = createQueryKeys(VEHICLES_QUERY_KEY, {
  vehiclesFindPost: (params: ScmApiVehiclesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.vehiclesFindPost(params),
    };
  },
  vehiclesGet: (params: ScmApiVehiclesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.vehiclesGet(params),
    };
  },
  vehiclesVehicleIdGet: (params: ScmApiVehiclesVehicleIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.vehiclesVehicleIdGet(params),
    };
  },
});

export const vehiclesMutate = createMutationKeys(VEHICLES_QUERY_KEY, {
  vehiclesPost: (params: ScmApiVehiclesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.vehiclesPost(params),
    };
  },
  vehiclesVehicleIdDelete: (params: ScmApiVehiclesVehicleIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.vehiclesVehicleIdDelete(params),
    };
  },
  vehiclesVehicleIdPut: (params: ScmApiVehiclesVehicleIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.vehiclesVehicleIdPut(params),
    };
  },
});

export const vehiclesQueryKeys = mergeQueryKeys(vehicles, vehiclesMutate);