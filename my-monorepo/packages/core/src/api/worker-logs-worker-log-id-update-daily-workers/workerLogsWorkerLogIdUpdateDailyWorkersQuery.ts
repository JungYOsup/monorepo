import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiWorkerLogsWorkerLogIdUpdateDailyWorkersPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKERLOGSWORKERLOGIDUPDATEDAILYWORKERS_QUERY_KEY = "WORKERLOGSWORKERLOGIDUPDATEDAILYWORKERS";

export const workerLogsWorkerLogIdUpdateDailyWorkersMutate = createMutationKeys(WORKERLOGSWORKERLOGIDUPDATEDAILYWORKERS_QUERY_KEY, {
  workerLogsWorkerLogIdUpdateDailyWorkersPut: (params: MasterApiWorkerLogsWorkerLogIdUpdateDailyWorkersPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.workerLogsWorkerLogIdUpdateDailyWorkersPut(params),
    };
  },
});

export const workerLogsWorkerLogIdUpdateDailyWorkersQueryKeys = workerLogsWorkerLogIdUpdateDailyWorkersMutate;