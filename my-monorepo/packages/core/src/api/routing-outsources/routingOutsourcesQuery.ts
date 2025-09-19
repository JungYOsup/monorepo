import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiRoutingOutsourcesFindPostRequest,
  DefaultApiRoutingOutsourcesGetRequest,
  DefaultApiRoutingOutsourcesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ROUTINGOUTSOURCES_QUERY_KEY = "ROUTINGOUTSOURCES";

export const routingOutsources = createQueryKeys(ROUTINGOUTSOURCES_QUERY_KEY, {
  routingOutsourcesFindPost: (params: DefaultApiRoutingOutsourcesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingOutsourcesFindPost(params),
    };
  },
  routingOutsourcesGet: (params: DefaultApiRoutingOutsourcesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingOutsourcesGet(params),
    };
  },
});

export const routingOutsourcesMutate = createMutationKeys(ROUTINGOUTSOURCES_QUERY_KEY, {
  routingOutsourcesPost: (params: DefaultApiRoutingOutsourcesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingOutsourcesPost(params),
    };
  },
});

export const routingOutsourcesQueryKeys = mergeQueryKeys(routingOutsources, routingOutsourcesMutate);