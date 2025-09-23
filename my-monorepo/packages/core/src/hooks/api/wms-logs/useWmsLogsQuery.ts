import { wmsLogs } from "@core/api/wms-logs/wmsLogsQuery";
import { DefaultApiWmsLogsFindPostRequest, DefaultApiWmsLogsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWmsLogsWmsLogsFindPostQuery = (params: DefaultApiWmsLogsFindPostRequest) => {
  return useQuery({
    ...wmsLogs.wmsLogsFindPost(params),
    enabled: !!params,
  });
};

export const useWmsLogsWmsLogsGetQuery = (params: DefaultApiWmsLogsGetRequest) => {
  return useQuery({
    ...wmsLogs.wmsLogsGet(params),
    retry: 1,
  });
};
