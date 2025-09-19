import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsLogsFindPostRequest,
  DefaultApiWmsLogsGetRequest,
  DefaultApiWmsLogsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSLOGS_QUERY_KEY = "WMSLOGS";

export const wmsLogs = createQueryKeys(WMSLOGS_QUERY_KEY, {
  wmsLogsFindPost: (params: DefaultApiWmsLogsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.wmsLogsFindPost(params),
    };
  },
  wmsLogsGet: (params: DefaultApiWmsLogsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.wmsLogsGet(params),
    };
  },
});

export const wmsLogsMutate = createMutationKeys(WMSLOGS_QUERY_KEY, {
  wmsLogsPost: (params: DefaultApiWmsLogsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsLogsPost(params),
    };
  },
});

export const wmsLogsQueryKeys = mergeQueryKeys(wmsLogs, wmsLogsMutate);