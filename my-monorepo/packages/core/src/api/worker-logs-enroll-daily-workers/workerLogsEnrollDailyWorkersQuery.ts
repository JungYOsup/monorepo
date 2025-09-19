import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiWorkerLogsEnrollDailyWorkersPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKERLOGSENROLLDAILYWORKERS_QUERY_KEY = "WORKERLOGSENROLLDAILYWORKERS";

export const workerLogsEnrollDailyWorkersMutate = createMutationKeys(WORKERLOGSENROLLDAILYWORKERS_QUERY_KEY, {
  workerLogsEnrollDailyWorkersPost: (params: MasterApiWorkerLogsEnrollDailyWorkersPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.workerLogsEnrollDailyWorkersPost(params),
    };
  },
});

export const workerLogsEnrollDailyWorkersQueryKeys = workerLogsEnrollDailyWorkersMutate;