import { workerLogsWorkerLogIdUpdateDailyWorkersMutate } from "@core/api/worker-logs-worker-log-id-update-daily-workers/workerLogsWorkerLogIdUpdateDailyWorkersQuery";
import { MasterApiWorkerLogsWorkerLogIdUpdateDailyWorkersPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkerLogsWorkerLogIdUpdateDailyWorkersWorkerLogsWorkerLogIdUpdateDailyWorkersPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiWorkerLogsWorkerLogIdUpdateDailyWorkersPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workerLogsWorkerLogIdUpdateDailyWorkersPut"],
    mutationFn: (params: MasterApiWorkerLogsWorkerLogIdUpdateDailyWorkersPutRequest) => workerLogsWorkerLogIdUpdateDailyWorkersMutate.workerLogsWorkerLogIdUpdateDailyWorkersPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
