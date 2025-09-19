import { worksOrderGroupSort } from "@core/api/works-order-group-sort/worksOrderGroupSortQuery";
import { DefaultApiWorksOrderGroupSortFindPostRequest, DefaultApiWorksOrderGroupSortGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorksOrderGroupSortWorksOrderGroupSortFindPostQuery = (params: DefaultApiWorksOrderGroupSortFindPostRequest) => {
  return useQuery({
    ...worksOrderGroupSort.worksOrderGroupSortFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useWorksOrderGroupSortWorksOrderGroupSortGetQuery = (params: DefaultApiWorksOrderGroupSortGetRequest) => {
  return useQuery({
    ...worksOrderGroupSort.worksOrderGroupSortGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
