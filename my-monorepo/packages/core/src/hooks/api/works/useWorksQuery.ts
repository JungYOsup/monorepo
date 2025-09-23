import { works } from "@core/api/works/worksQuery";
import { DefaultApiWorksFindPostRequest, DefaultApiWorksGetRequest, DefaultApiWorksItemWorkIdGetRequest, DefaultApiWorksOrderGroupSortWorkOrderGroupSortIdGetRequest, DefaultApiWorksOrderGroupWorkOrderGroupIdGetRequest, DefaultApiWorksWorkIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorksWorksFindPostQuery = (params: DefaultApiWorksFindPostRequest) => {
  return useQuery({
    ...works.worksFindPost(params),
    enabled: !!params,
  });
};

export const useWorksWorksGetQuery = (params: DefaultApiWorksGetRequest) => {
  return useQuery({
    ...works.worksGet(params),
    retry: 1,
  });
};

export const useWorksWorksItemWorkIdGetQuery = (params: DefaultApiWorksItemWorkIdGetRequest) => {
  return useQuery({
    ...works.worksItemWorkIdGet(params),
    retry: 1,
  });
};

export const useWorksWorksOrderGroupSortWorkOrderGroupSortIdGetQuery = (params: DefaultApiWorksOrderGroupSortWorkOrderGroupSortIdGetRequest) => {
  return useQuery({
    ...works.worksOrderGroupSortWorkOrderGroupSortIdGet(params),
    retry: 1,
  });
};

export const useWorksWorksOrderGroupWorkOrderGroupIdGetQuery = (params: DefaultApiWorksOrderGroupWorkOrderGroupIdGetRequest) => {
  return useQuery({
    ...works.worksOrderGroupWorkOrderGroupIdGet(params),
    retry: 1,
  });
};

export const useWorksWorksWorkIdGetQuery = (params: DefaultApiWorksWorkIdGetRequest) => {
  return useQuery({
    ...works.worksWorkIdGet(params),
    retry: 1,
  });
};
