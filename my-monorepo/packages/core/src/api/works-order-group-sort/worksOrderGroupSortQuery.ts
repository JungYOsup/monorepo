import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorksOrderGroupSortFindPostRequest,
  DefaultApiWorksOrderGroupSortGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSORDERGROUPSORT_QUERY_KEY = "WORKSORDERGROUPSORT";

export const worksOrderGroupSort = createQueryKeys(WORKSORDERGROUPSORT_QUERY_KEY, {
  worksOrderGroupSortFindPost: (params: DefaultApiWorksOrderGroupSortFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksOrderGroupSortFindPost(params),
    };
  },
  worksOrderGroupSortGet: (params: DefaultApiWorksOrderGroupSortGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksOrderGroupSortGet(params),
    };
  },
});

export const worksOrderGroupSortQueryKeys = worksOrderGroupSort;