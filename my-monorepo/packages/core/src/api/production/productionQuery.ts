import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiProductionPlansConsumedLotIdLotIdGetRequest,
  DefaultApiProductionPlansProductionLotIdLotIdGetRequest,
  DefaultApiProductionPlansProductionPlanIdGetRequest,
  DefaultApiProductionPlansProductionPlanIdDeleteRequest,
  DefaultApiProductionPlansProductionPlanIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PRODUCTION_QUERY_KEY = "PRODUCTION";

export const production = createQueryKeys(PRODUCTION_QUERY_KEY, {
  productionPlansConsumedLotIdLotIdGet: (params: DefaultApiProductionPlansConsumedLotIdLotIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.productionPlansConsumedLotIdLotIdGet(params),
    };
  },
  productionPlansProductionLotIdLotIdGet: (params: DefaultApiProductionPlansProductionLotIdLotIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.productionPlansProductionLotIdLotIdGet(params),
    };
  },
  productionPlansProductionPlanIdGet: (params: DefaultApiProductionPlansProductionPlanIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.productionPlansProductionPlanIdGet(params),
    };
  },
});

export const productionMutate = createMutationKeys(PRODUCTION_QUERY_KEY, {
  productionPlansProductionPlanIdDelete: (params: DefaultApiProductionPlansProductionPlanIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.productionPlansProductionPlanIdDelete(params),
    };
  },
  productionPlansProductionPlanIdPut: (params: DefaultApiProductionPlansProductionPlanIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.productionPlansProductionPlanIdPut(params),
    };
  },
});

export const productionQueryKeys = mergeQueryKeys(production, productionMutate);