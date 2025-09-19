import { routing } from "@core/api/routing/routingQuery";
import { DefaultApiRoutingBomsRoutingBomIdGetRequest, DefaultApiRoutingOutsourcesRoutingOutsourceIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useRoutingRoutingBomsRoutingBomIdGetQuery = (params: DefaultApiRoutingBomsRoutingBomIdGetRequest) => {
  return useQuery({
    ...routing.routingBomsRoutingBomIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useRoutingRoutingOutsourcesRoutingOutsourceIdGetQuery = (params: DefaultApiRoutingOutsourcesRoutingOutsourceIdGetRequest) => {
  return useQuery({
    ...routing.routingOutsourcesRoutingOutsourceIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
