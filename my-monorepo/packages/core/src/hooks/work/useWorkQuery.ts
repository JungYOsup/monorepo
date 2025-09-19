import { work } from "@core/api/work/workQuery";
import { DefaultApiWorkLogsWorkLogIdGetRequest, DefaultApiWorkLogsWorksWorkLogIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkWorkLogsWorkLogIdGetQuery = (params: DefaultApiWorkLogsWorkLogIdGetRequest) => {
  return useQuery({
    ...work.workLogsWorkLogIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useWorkWorkLogsWorksWorkLogIdGetQuery = (params: DefaultApiWorkLogsWorksWorkLogIdGetRequest) => {
  return useQuery({
    ...work.workLogsWorksWorkLogIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
