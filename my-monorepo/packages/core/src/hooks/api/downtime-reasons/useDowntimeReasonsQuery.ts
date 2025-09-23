import { downtimeReasons } from "@core/api/downtime-reasons/downtimeReasonsQuery";
import { DefaultApiDowntimeReasonsFindPostRequest, DefaultApiDowntimeReasonsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useDowntimeReasonsDowntimeReasonsFindPostQuery = (params: DefaultApiDowntimeReasonsFindPostRequest) => {
  return useQuery({
    ...downtimeReasons.downtimeReasonsFindPost(params),
    enabled: !!params,
  });
};

export const useDowntimeReasonsDowntimeReasonsGetQuery = (params: DefaultApiDowntimeReasonsGetRequest) => {
  return useQuery({
    ...downtimeReasons.downtimeReasonsGet(params),
    retry: 1,
  });
};
