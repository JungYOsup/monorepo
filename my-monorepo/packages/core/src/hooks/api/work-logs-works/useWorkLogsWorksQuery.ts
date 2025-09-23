import { workLogsWorks } from "@core/api/work-logs-works/workLogsWorksQuery";
import { DefaultApiWorkLogsWorksFindPostRequest, DefaultApiWorkLogsWorksGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkLogsWorksWorkLogsWorksFindPostQuery = (params: DefaultApiWorkLogsWorksFindPostRequest) => {
  return useQuery({
    ...workLogsWorks.workLogsWorksFindPost(params),
    enabled: !!params,
  });
};

export const useWorkLogsWorksWorkLogsWorksGetQuery = (params: DefaultApiWorkLogsWorksGetRequest) => {
  return useQuery({
    ...workLogsWorks.workLogsWorksGet(params),
    retry: 1,
  });
};
