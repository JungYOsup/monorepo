import { downtimeReasonsDowntimeReasonCode } from "@core/api/downtime-reasons-downtime-reason-code/downtimeReasonsDowntimeReasonCodeQuery";
import { DefaultApiDowntimeReasonsDowntimeReasonCodeGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useDowntimeReasonsDowntimeReasonCodeDowntimeReasonsDowntimeReasonCodeGetQuery = (params: DefaultApiDowntimeReasonsDowntimeReasonCodeGetRequest) => {
  return useQuery({
    ...downtimeReasonsDowntimeReasonCode.downtimeReasonsDowntimeReasonCodeGet(params),
    retry: 1,
  });
};
