import { workLogsWorks } from "@core/api/work-logs-works/workLogsWorksQuery";
import { DefaultApiWorkLogsWorksFindPostRequest, DefaultApiWorkLogsWorksGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkLogsWorksWorkLogsWorksFindPostQuery = (params: DefaultApiWorkLogsWorksFindPostRequest) => {
  return useQuery({
    ...workLogsWorks.workLogsWorksFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useWorkLogsWorksWorkLogsWorksGetQuery = (params: DefaultApiWorkLogsWorksGetRequest) => {
  return useQuery({
    ...workLogsWorks.workLogsWorksGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
