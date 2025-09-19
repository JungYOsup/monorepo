import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiLocationsFindPostRequest,
  MasterApiLocationsGetRequest,
  MasterApiLocationsLocationIdGetRequest,
  MasterApiLocationsLocationIdDeleteRequest,
  MasterApiLocationsLocationIdPutRequest,
  MasterApiLocationsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const LOCATIONS_QUERY_KEY = "LOCATIONS";

export const locations = createQueryKeys(LOCATIONS_QUERY_KEY, {
  locationsFindPost: (params: MasterApiLocationsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.locationsFindPost(params),
    };
  },
  locationsGet: (params: MasterApiLocationsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.locationsGet(params),
    };
  },
  locationsLocationIdGet: (params: MasterApiLocationsLocationIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.locationsLocationIdGet(params),
    };
  },
});

export const locationsMutate = createMutationKeys(LOCATIONS_QUERY_KEY, {
  locationsLocationIdDelete: (params: MasterApiLocationsLocationIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.locationsLocationIdDelete(params),
    };
  },
  locationsLocationIdPut: (params: MasterApiLocationsLocationIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.locationsLocationIdPut(params),
    };
  },
  locationsPost: (params: MasterApiLocationsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.locationsPost(params),
    };
  },
});

export const locationsQueryKeys = mergeQueryKeys(locations, locationsMutate);