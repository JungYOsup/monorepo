import { worker } from "@core/api/worker/workerQuery";
import { MasterApiWorkerLogsWorkerLogIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkerWorkerLogsWorkerLogIdGetQuery = (params: MasterApiWorkerLogsWorkerLogIdGetRequest) => {
  return useQuery({
    ...worker.workerLogsWorkerLogIdGet(params),
    retry: 1,
  });
};
