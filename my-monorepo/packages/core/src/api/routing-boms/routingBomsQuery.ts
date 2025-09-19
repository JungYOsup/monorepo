import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiRoutingBomsFindPostRequest,
  DefaultApiRoutingBomsGetRequest,
  DefaultApiRoutingBomsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ROUTINGBOMS_QUERY_KEY = "ROUTINGBOMS";

export const routingBoms = createQueryKeys(ROUTINGBOMS_QUERY_KEY, {
  routingBomsFindPost: (params: DefaultApiRoutingBomsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingBomsFindPost(params),
    };
  },
  routingBomsGet: (params: DefaultApiRoutingBomsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingBomsGet(params),
    };
  },
});

export const routingBomsMutate = createMutationKeys(ROUTINGBOMS_QUERY_KEY, {
  routingBomsPost: (params: DefaultApiRoutingBomsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingBomsPost(params),
    };
  },
});

export const routingBomsQueryKeys = mergeQueryKeys(routingBoms, routingBomsMutate);