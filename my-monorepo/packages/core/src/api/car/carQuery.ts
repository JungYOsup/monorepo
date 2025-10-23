import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiCarModelsCarModelIdGetRequest,
  MasterApiCarModelsCarModelIdDeleteRequest,
  MasterApiCarModelsCarModelIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const CAR_QUERY_KEY = "CAR";

export const car = createQueryKeys(CAR_QUERY_KEY, {
  carModelsCarModelIdGet: (params: MasterApiCarModelsCarModelIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.carModelsCarModelIdGet(params),
    };
  },
});

export const carMutate = createMutationKeys(CAR_QUERY_KEY, {
  carModelsCarModelIdDelete: (params: MasterApiCarModelsCarModelIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.carModelsCarModelIdDelete(params),
    };
  },
  carModelsCarModelIdPut: (params: MasterApiCarModelsCarModelIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.carModelsCarModelIdPut(params),
    };
  },
});

export const carQueryKeys = mergeQueryKeys(car, carMutate);