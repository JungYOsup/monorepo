import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorkLogsFindPostRequest,
  DefaultApiWorkLogsGetRequest,
  DefaultApiWorkLogsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGS_QUERY_KEY = "WORKLOGS";

export const workLogs = createQueryKeys(WORKLOGS_QUERY_KEY, {
  workLogsFindPost: (params: DefaultApiWorkLogsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.workLogsFindPost(params),
    };
  },
  workLogsGet: (params: DefaultApiWorkLogsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.workLogsGet(params),
    };
  },
});

export const workLogsMutate = createMutationKeys(WORKLOGS_QUERY_KEY, {
  workLogsPost: (params: DefaultApiWorkLogsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.workLogsPost(params),
    };
  },
});

export const workLogsQueryKeys = mergeQueryKeys(workLogs, workLogsMutate);