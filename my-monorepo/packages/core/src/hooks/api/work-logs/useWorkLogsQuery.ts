import { workLogs } from "@core/api/work-logs/workLogsQuery";
import { DefaultApiWorkLogsFindPostRequest, DefaultApiWorkLogsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkLogsWorkLogsFindPostQuery = (params: DefaultApiWorkLogsFindPostRequest) => {
  return useQuery({
    ...workLogs.workLogsFindPost(params),
    enabled: !!params,
  });
};

export const useWorkLogsWorkLogsGetQuery = (params: DefaultApiWorkLogsGetRequest) => {
  return useQuery({
    ...workLogs.workLogsGet(params),
    retry: 1,
  });
};
