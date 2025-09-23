import { worksOrderGroup } from "@core/api/works-order-group/worksOrderGroupQuery";
import { DefaultApiWorksOrderGroupFindPostRequest, DefaultApiWorksOrderGroupGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorksOrderGroupWorksOrderGroupFindPostQuery = (params: DefaultApiWorksOrderGroupFindPostRequest) => {
  return useQuery({
    ...worksOrderGroup.worksOrderGroupFindPost(params),
    enabled: !!params,
  });
};

export const useWorksOrderGroupWorksOrderGroupGetQuery = (params: DefaultApiWorksOrderGroupGetRequest) => {
  return useQuery({
    ...worksOrderGroup.worksOrderGroupGet(params),
    retry: 1,
  });
};
