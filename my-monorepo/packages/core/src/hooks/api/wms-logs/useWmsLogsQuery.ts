import { wmsLogs } from "@core/api/wms-logs/wmsLogsQuery";
import { DefaultApiWmsLogsFindPostRequest, DefaultApiWmsLogsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWmsLogsWmsLogsFindPostQuery = (params: DefaultApiWmsLogsFindPostRequest) => {
  return useQuery({
    ...wmsLogs.wmsLogsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useWmsLogsWmsLogsGetQuery = (params: DefaultApiWmsLogsGetRequest) => {
  return useQuery({
    ...wmsLogs.wmsLogsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
