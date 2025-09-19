import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiMoldCavitiesFindPostRequest,
  DefaultApiMoldCavitiesGetRequest,
  DefaultApiMoldCavitiesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const MOLDCAVITIES_QUERY_KEY = "MOLDCAVITIES";

export const moldCavities = createQueryKeys(MOLDCAVITIES_QUERY_KEY, {
  moldCavitiesFindPost: (params: DefaultApiMoldCavitiesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.moldCavitiesFindPost(params),
    };
  },
  moldCavitiesGet: (params: DefaultApiMoldCavitiesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.moldCavitiesGet(params),
    };
  },
});

export const moldCavitiesMutate = createMutationKeys(MOLDCAVITIES_QUERY_KEY, {
  moldCavitiesPost: (params: DefaultApiMoldCavitiesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.moldCavitiesPost(params),
    };
  },
});

export const moldCavitiesQueryKeys = mergeQueryKeys(moldCavities, moldCavitiesMutate);