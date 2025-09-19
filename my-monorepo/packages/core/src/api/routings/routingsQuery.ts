import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiRoutingsFindPostRequest,
  DefaultApiRoutingsGetRequest,
  DefaultApiRoutingsRoutingIdGetRequest,
  DefaultApiRoutingsPostRequest,
  DefaultApiRoutingsRoutingIdDeleteRequest,
  DefaultApiRoutingsRoutingIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ROUTINGS_QUERY_KEY = "ROUTINGS";

export const routings = createQueryKeys(ROUTINGS_QUERY_KEY, {
  routingsFindPost: (params: DefaultApiRoutingsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingsFindPost(params),
    };
  },
  routingsGet: (params: DefaultApiRoutingsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingsGet(params),
    };
  },
  routingsRoutingIdGet: (params: DefaultApiRoutingsRoutingIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingsRoutingIdGet(params),
    };
  },
});

export const routingsMutate = createMutationKeys(ROUTINGS_QUERY_KEY, {
  routingsPost: (params: DefaultApiRoutingsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingsPost(params),
    };
  },
  routingsRoutingIdDelete: (params: DefaultApiRoutingsRoutingIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingsRoutingIdDelete(params),
    };
  },
  routingsRoutingIdPut: (params: DefaultApiRoutingsRoutingIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingsRoutingIdPut(params),
    };
  },
});

export const routingsQueryKeys = mergeQueryKeys(routings, routingsMutate);