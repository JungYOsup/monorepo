import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiMoldCavitiesMoldCavityIdGetRequest,
  DefaultApiMoldCavitiesMoldCavityIdDeleteRequest,
  DefaultApiMoldCavitiesMoldCavityIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const MOLD_QUERY_KEY = "MOLD";

export const mold = createQueryKeys(MOLD_QUERY_KEY, {
  moldCavitiesMoldCavityIdGet: (params: DefaultApiMoldCavitiesMoldCavityIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.moldCavitiesMoldCavityIdGet(params),
    };
  },
});

export const moldMutate = createMutationKeys(MOLD_QUERY_KEY, {
  moldCavitiesMoldCavityIdDelete: (params: DefaultApiMoldCavitiesMoldCavityIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.moldCavitiesMoldCavityIdDelete(params),
    };
  },
  moldCavitiesMoldCavityIdPut: (params: DefaultApiMoldCavitiesMoldCavityIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.moldCavitiesMoldCavityIdPut(params),
    };
  },
});

export const moldQueryKeys = mergeQueryKeys(mold, moldMutate);