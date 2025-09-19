import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiTransportationFindPostRequest,
  ScmApiTransportationGetRequest,
  ScmApiTransportationTransportationIdGetRequest,
  ScmApiTransportationPostRequest,
  ScmApiTransportationTransportationIdDeleteRequest,
  ScmApiTransportationTransportationIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const TRANSPORTATION_QUERY_KEY = "TRANSPORTATION";

export const transportation = createQueryKeys(TRANSPORTATION_QUERY_KEY, {
  transportationFindPost: (params: ScmApiTransportationFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.transportationFindPost(params),
    };
  },
  transportationGet: (params: ScmApiTransportationGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.transportationGet(params),
    };
  },
  transportationTransportationIdGet: (params: ScmApiTransportationTransportationIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.transportationTransportationIdGet(params),
    };
  },
});

export const transportationMutate = createMutationKeys(TRANSPORTATION_QUERY_KEY, {
  transportationPost: (params: ScmApiTransportationPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.transportationPost(params),
    };
  },
  transportationTransportationIdDelete: (params: ScmApiTransportationTransportationIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.transportationTransportationIdDelete(params),
    };
  },
  transportationTransportationIdPut: (params: ScmApiTransportationTransportationIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.transportationTransportationIdPut(params),
    };
  },
});

export const transportationQueryKeys = mergeQueryKeys(transportation, transportationMutate);