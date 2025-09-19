import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorksOrderGroupFindPostRequest,
  DefaultApiWorksOrderGroupGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSORDERGROUP_QUERY_KEY = "WORKSORDERGROUP";

export const worksOrderGroup = createQueryKeys(WORKSORDERGROUP_QUERY_KEY, {
  worksOrderGroupFindPost: (params: DefaultApiWorksOrderGroupFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksOrderGroupFindPost(params),
    };
  },
  worksOrderGroupGet: (params: DefaultApiWorksOrderGroupGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksOrderGroupGet(params),
    };
  },
});

export const worksOrderGroupQueryKeys = worksOrderGroup;