import { workerLogsEnrollDailyWorkersMutate } from "@core/api/worker-logs-enroll-daily-workers/workerLogsEnrollDailyWorkersQuery";
import { MasterApiWorkerLogsEnrollDailyWorkersPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkerLogsEnrollDailyWorkersWorkerLogsEnrollDailyWorkersPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiWorkerLogsEnrollDailyWorkersPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workerLogsEnrollDailyWorkersPost"],
    mutationFn: (params: MasterApiWorkerLogsEnrollDailyWorkersPostRequest) => workerLogsEnrollDailyWorkersMutate.workerLogsEnrollDailyWorkersPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
