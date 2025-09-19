import { routingBoms } from "@core/api/routing-boms/routingBomsQuery";
import { DefaultApiRoutingBomsFindPostRequest, DefaultApiRoutingBomsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useRoutingBomsRoutingBomsFindPostQuery = (params: DefaultApiRoutingBomsFindPostRequest) => {
  return useQuery({
    ...routingBoms.routingBomsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useRoutingBomsRoutingBomsGetQuery = (params: DefaultApiRoutingBomsGetRequest) => {
  return useQuery({
    ...routingBoms.routingBomsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
