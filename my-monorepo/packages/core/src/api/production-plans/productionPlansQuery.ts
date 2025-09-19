import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiProductionPlansFindPostRequest,
  DefaultApiProductionPlansGetRequest,
  DefaultApiProductionPlansPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PRODUCTIONPLANS_QUERY_KEY = "PRODUCTIONPLANS";

export const productionPlans = createQueryKeys(PRODUCTIONPLANS_QUERY_KEY, {
  productionPlansFindPost: (params: DefaultApiProductionPlansFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.productionPlansFindPost(params),
    };
  },
  productionPlansGet: (params: DefaultApiProductionPlansGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.productionPlansGet(params),
    };
  },
});

export const productionPlansMutate = createMutationKeys(PRODUCTIONPLANS_QUERY_KEY, {
  productionPlansPost: (params: DefaultApiProductionPlansPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.productionPlansPost(params),
    };
  },
});

export const productionPlansQueryKeys = mergeQueryKeys(productionPlans, productionPlansMutate);