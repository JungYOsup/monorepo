import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiWorkerLogsWorkerLogIdGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKER_QUERY_KEY = "WORKER";

export const worker = createQueryKeys(WORKER_QUERY_KEY, {
  workerLogsWorkerLogIdGet: (params: MasterApiWorkerLogsWorkerLogIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.workerLogsWorkerLogIdGet(params),
    };
  },
});

export const workerQueryKeys = worker;