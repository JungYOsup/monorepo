import { downtimeReasons } from "@core/api/downtime-reasons/downtimeReasonsQuery";
import { DefaultApiDowntimeReasonsFindPostRequest, DefaultApiDowntimeReasonsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useDowntimeReasonsDowntimeReasonsFindPostQuery = (params: DefaultApiDowntimeReasonsFindPostRequest) => {
  return useQuery({
    ...downtimeReasons.downtimeReasonsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useDowntimeReasonsDowntimeReasonsGetQuery = (params: DefaultApiDowntimeReasonsGetRequest) => {
  return useQuery({
    ...downtimeReasons.downtimeReasonsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
