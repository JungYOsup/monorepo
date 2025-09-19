import { works } from "@core/api/works/worksQuery";
import { DefaultApiWorksFindPostRequest, DefaultApiWorksGetRequest, DefaultApiWorksItemWorkIdGetRequest, DefaultApiWorksOrderGroupSortWorkOrderGroupSortIdGetRequest, DefaultApiWorksOrderGroupWorkOrderGroupIdGetRequest, DefaultApiWorksWorkIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorksWorksFindPostQuery = (params: DefaultApiWorksFindPostRequest) => {
  return useQuery({
    ...works.worksFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useWorksWorksGetQuery = (params: DefaultApiWorksGetRequest) => {
  return useQuery({
    ...works.worksGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useWorksWorksItemWorkIdGetQuery = (params: DefaultApiWorksItemWorkIdGetRequest) => {
  return useQuery({
    ...works.worksItemWorkIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useWorksWorksOrderGroupSortWorkOrderGroupSortIdGetQuery = (params: DefaultApiWorksOrderGroupSortWorkOrderGroupSortIdGetRequest) => {
  return useQuery({
    ...works.worksOrderGroupSortWorkOrderGroupSortIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useWorksWorksOrderGroupWorkOrderGroupIdGetQuery = (params: DefaultApiWorksOrderGroupWorkOrderGroupIdGetRequest) => {
  return useQuery({
    ...works.worksOrderGroupWorkOrderGroupIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useWorksWorksWorkIdGetQuery = (params: DefaultApiWorksWorkIdGetRequest) => {
  return useQuery({
    ...works.worksWorkIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
