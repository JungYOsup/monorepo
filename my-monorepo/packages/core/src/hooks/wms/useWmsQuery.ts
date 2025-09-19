import { wms } from "@core/api/wms/wmsQuery";
import { DefaultApiWmsLogsWmsLogIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWmsWmsLogsWmsLogIdGetQuery = (params: DefaultApiWmsLogsWmsLogIdGetRequest) => {
  return useQuery({
    ...wms.wmsLogsWmsLogIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
