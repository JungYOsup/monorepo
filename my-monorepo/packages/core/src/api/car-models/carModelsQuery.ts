import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiCarModelsFindPostRequest,
  MasterApiCarModelsGetRequest,
  MasterApiCarModelsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const CARMODELS_QUERY_KEY = "CARMODELS";

export const carModels = createQueryKeys(CARMODELS_QUERY_KEY, {
  carModelsFindPost: (params: MasterApiCarModelsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.carModelsFindPost(params),
    };
  },
  carModelsGet: (params: MasterApiCarModelsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.carModelsGet(params),
    };
  },
});

export const carModelsMutate = createMutationKeys(CARMODELS_QUERY_KEY, {
  carModelsPost: (params: MasterApiCarModelsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.carModelsPost(params),
    };
  },
});

export const carModelsQueryKeys = mergeQueryKeys(carModels, carModelsMutate);