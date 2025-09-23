import { routings } from "@core/api/routings/routingsQuery";
import { DefaultApiRoutingsFindPostRequest, DefaultApiRoutingsGetRequest, DefaultApiRoutingsRoutingIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useRoutingsRoutingsFindPostQuery = (params: DefaultApiRoutingsFindPostRequest) => {
  return useQuery({
    ...routings.routingsFindPost(params),
    enabled: !!params,
  });
};

export const useRoutingsRoutingsGetQuery = (params: DefaultApiRoutingsGetRequest) => {
  return useQuery({
    ...routings.routingsGet(params),
    retry: 1,
  });
};

export const useRoutingsRoutingsRoutingIdGetQuery = (params: DefaultApiRoutingsRoutingIdGetRequest) => {
  return useQuery({
    ...routings.routingsRoutingIdGet(params),
    retry: 1,
  });
};
