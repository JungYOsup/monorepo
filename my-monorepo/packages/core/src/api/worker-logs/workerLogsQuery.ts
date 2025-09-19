import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiWorkerLogsFindPostRequest,
  MasterApiWorkerLogsGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKERLOGS_QUERY_KEY = "WORKERLOGS";

export const workerLogs = createQueryKeys(WORKERLOGS_QUERY_KEY, {
  workerLogsFindPost: (params: MasterApiWorkerLogsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.workerLogsFindPost(params),
    };
  },
  workerLogsGet: (params: MasterApiWorkerLogsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.workerLogsGet(params),
    };
  },
});

export const workerLogsQueryKeys = workerLogs;