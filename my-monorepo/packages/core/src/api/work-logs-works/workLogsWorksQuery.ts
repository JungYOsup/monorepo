import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorkLogsWorksFindPostRequest,
  DefaultApiWorkLogsWorksGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKS_QUERY_KEY = "WORKLOGSWORKS";

export const workLogsWorks = createQueryKeys(WORKLOGSWORKS_QUERY_KEY, {
  workLogsWorksFindPost: (params: DefaultApiWorkLogsWorksFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.workLogsWorksFindPost(params),
    };
  },
  workLogsWorksGet: (params: DefaultApiWorkLogsWorksGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.workLogsWorksGet(params),
    };
  },
});

export const workLogsWorksQueryKeys = workLogsWorks;