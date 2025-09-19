import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiRoutingBomsRoutingBomIdGetRequest,
  DefaultApiRoutingOutsourcesRoutingOutsourceIdGetRequest,
  DefaultApiRoutingBomsRoutingBomIdDeleteRequest,
  DefaultApiRoutingBomsRoutingBomIdPutRequest,
  DefaultApiRoutingOutsourcesRoutingOutsourceIdDeleteRequest,
  DefaultApiRoutingOutsourcesRoutingOutsourceIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ROUTING_QUERY_KEY = "ROUTING";

export const routing = createQueryKeys(ROUTING_QUERY_KEY, {
  routingBomsRoutingBomIdGet: (params: DefaultApiRoutingBomsRoutingBomIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingBomsRoutingBomIdGet(params),
    };
  },
  routingOutsourcesRoutingOutsourceIdGet: (params: DefaultApiRoutingOutsourcesRoutingOutsourceIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.routingOutsourcesRoutingOutsourceIdGet(params),
    };
  },
});

export const routingMutate = createMutationKeys(ROUTING_QUERY_KEY, {
  routingBomsRoutingBomIdDelete: (params: DefaultApiRoutingBomsRoutingBomIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingBomsRoutingBomIdDelete(params),
    };
  },
  routingBomsRoutingBomIdPut: (params: DefaultApiRoutingBomsRoutingBomIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingBomsRoutingBomIdPut(params),
    };
  },
  routingOutsourcesRoutingOutsourceIdDelete: (params: DefaultApiRoutingOutsourcesRoutingOutsourceIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingOutsourcesRoutingOutsourceIdDelete(params),
    };
  },
  routingOutsourcesRoutingOutsourceIdPut: (params: DefaultApiRoutingOutsourcesRoutingOutsourceIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.routingOutsourcesRoutingOutsourceIdPut(params),
    };
  },
});

export const routingQueryKeys = mergeQueryKeys(routing, routingMutate);