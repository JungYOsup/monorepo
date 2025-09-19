import { routingOutsources } from "@core/api/routing-outsources/routingOutsourcesQuery";
import { DefaultApiRoutingOutsourcesFindPostRequest, DefaultApiRoutingOutsourcesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useRoutingOutsourcesRoutingOutsourcesFindPostQuery = (params: DefaultApiRoutingOutsourcesFindPostRequest) => {
  return useQuery({
    ...routingOutsources.routingOutsourcesFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useRoutingOutsourcesRoutingOutsourcesGetQuery = (params: DefaultApiRoutingOutsourcesGetRequest) => {
  return useQuery({
    ...routingOutsources.routingOutsourcesGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
