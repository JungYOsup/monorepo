import { workerLogs } from "@core/api/worker-logs/workerLogsQuery";
import { MasterApiWorkerLogsFindPostRequest, MasterApiWorkerLogsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkerLogsWorkerLogsFindPostQuery = (params: MasterApiWorkerLogsFindPostRequest) => {
  return useQuery({
    ...workerLogs.workerLogsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useWorkerLogsWorkerLogsGetQuery = (params: MasterApiWorkerLogsGetRequest) => {
  return useQuery({
    ...workerLogs.workerLogsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
