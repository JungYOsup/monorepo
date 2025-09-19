import { incoming } from "@core/api/incoming/incomingQuery";
import { SpcApiIncomingInspectionsIncomingInspectionIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useIncomingIncomingInspectionsIncomingInspectionIdGetQuery = (params: SpcApiIncomingInspectionsIncomingInspectionIdGetRequest) => {
  return useQuery({
    ...incoming.incomingInspectionsIncomingInspectionIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
