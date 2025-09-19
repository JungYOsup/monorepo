import { routings } from "@core/api/routings/routingsQuery";
import { DefaultApiRoutingsFindPostRequest, DefaultApiRoutingsGetRequest, DefaultApiRoutingsRoutingIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useRoutingsRoutingsFindPostQuery = (params: DefaultApiRoutingsFindPostRequest) => {
  return useQuery({
    ...routings.routingsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useRoutingsRoutingsGetQuery = (params: DefaultApiRoutingsGetRequest) => {
  return useQuery({
    ...routings.routingsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useRoutingsRoutingsRoutingIdGetQuery = (params: DefaultApiRoutingsRoutingIdGetRequest) => {
  return useQuery({
    ...routings.routingsRoutingIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
