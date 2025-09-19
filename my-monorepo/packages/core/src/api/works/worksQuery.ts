import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorksFindPostRequest,
  DefaultApiWorksGetRequest,
  DefaultApiWorksItemWorkIdGetRequest,
  DefaultApiWorksOrderGroupSortWorkOrderGroupSortIdGetRequest,
  DefaultApiWorksOrderGroupWorkOrderGroupIdGetRequest,
  DefaultApiWorksWorkIdGetRequest,
  DefaultApiWorksPostRequest,
  DefaultApiWorksWorkIdDeleteRequest,
  DefaultApiWorksWorkIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKS_QUERY_KEY = "WORKS";

export const works = createQueryKeys(WORKS_QUERY_KEY, {
  worksFindPost: (params: DefaultApiWorksFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksFindPost(params),
    };
  },
  worksGet: (params: DefaultApiWorksGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksGet(params),
    };
  },
  worksItemWorkIdGet: (params: DefaultApiWorksItemWorkIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksItemWorkIdGet(params),
    };
  },
  worksOrderGroupSortWorkOrderGroupSortIdGet: (params: DefaultApiWorksOrderGroupSortWorkOrderGroupSortIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksOrderGroupSortWorkOrderGroupSortIdGet(params),
    };
  },
  worksOrderGroupWorkOrderGroupIdGet: (params: DefaultApiWorksOrderGroupWorkOrderGroupIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksOrderGroupWorkOrderGroupIdGet(params),
    };
  },
  worksWorkIdGet: (params: DefaultApiWorksWorkIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksWorkIdGet(params),
    };
  },
});

export const worksMutate = createMutationKeys(WORKS_QUERY_KEY, {
  worksPost: (params: DefaultApiWorksPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.worksPost(params),
    };
  },
  worksWorkIdDelete: (params: DefaultApiWorksWorkIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.worksWorkIdDelete(params),
    };
  },
  worksWorkIdPut: (params: DefaultApiWorksWorkIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.worksWorkIdPut(params),
    };
  },
});

export const worksQueryKeys = mergeQueryKeys(works, worksMutate);