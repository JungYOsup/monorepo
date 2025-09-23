import { work } from "@core/api/work/workQuery";
import { DefaultApiWorkLogsWorkLogIdGetRequest, DefaultApiWorkLogsWorksWorkLogIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorkWorkLogsWorkLogIdGetQuery = (params: DefaultApiWorkLogsWorkLogIdGetRequest) => {
  return useQuery({
    ...work.workLogsWorkLogIdGet(params),
    retry: 1,
  });
};

export const useWorkWorkLogsWorksWorkLogIdGetQuery = (params: DefaultApiWorkLogsWorksWorkLogIdGetRequest) => {
  return useQuery({
    ...work.workLogsWorksWorkLogIdGet(params),
    retry: 1,
  });
};
