import { workLogs } from "@core/api/work-logs/workLogsQuery";
import { DefaultApiWorkLogsFindPostRequest, DefaultApiWorkLogsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkLogsWorkLogsFindPostQuery = (params: DefaultApiWorkLogsFindPostRequest) => {
  return useQuery({
    ...workLogs.workLogsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useWorkLogsWorkLogsGetQuery = (params: DefaultApiWorkLogsGetRequest) => {
  return useQuery({
    ...workLogs.workLogsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
