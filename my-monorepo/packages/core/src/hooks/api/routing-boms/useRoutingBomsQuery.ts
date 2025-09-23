import { routingBoms } from "@core/api/routing-boms/routingBomsQuery";
import { DefaultApiRoutingBomsFindPostRequest, DefaultApiRoutingBomsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useRoutingBomsRoutingBomsFindPostQuery = (params: DefaultApiRoutingBomsFindPostRequest) => {
  return useQuery({
    ...routingBoms.routingBomsFindPost(params),
    enabled: !!params,
  });
};

export const useRoutingBomsRoutingBomsGetQuery = (params: DefaultApiRoutingBomsGetRequest) => {
  return useQuery({
    ...routingBoms.routingBomsGet(params),
    retry: 1,
  });
};
