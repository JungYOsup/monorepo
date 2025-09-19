import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiLotsFindPostRequest,
  DefaultApiLotsGetRequest,
  DefaultApiLotsLotIdGetRequest,
  DefaultApiLotsLotIdDeleteRequest,
  DefaultApiLotsLotIdPutRequest,
  DefaultApiLotsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const LOTS_QUERY_KEY = "LOTS";

export const lots = createQueryKeys(LOTS_QUERY_KEY, {
  lotsFindPost: (params: DefaultApiLotsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.lotsFindPost(params),
    };
  },
  lotsGet: (params: DefaultApiLotsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.lotsGet(params),
    };
  },
  lotsLotIdGet: (params: DefaultApiLotsLotIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.lotsLotIdGet(params),
    };
  },
});

export const lotsMutate = createMutationKeys(LOTS_QUERY_KEY, {
  lotsLotIdDelete: (params: DefaultApiLotsLotIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.lotsLotIdDelete(params),
    };
  },
  lotsLotIdPut: (params: DefaultApiLotsLotIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.lotsLotIdPut(params),
    };
  },
  lotsPost: (params: DefaultApiLotsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.lotsPost(params),
    };
  },
});

export const lotsQueryKeys = mergeQueryKeys(lots, lotsMutate);