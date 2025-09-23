import { incoming } from "@core/api/incoming/incomingQuery";
import { SpcApiIncomingInspectionsIncomingInspectionIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useIncomingIncomingInspectionsIncomingInspectionIdGetQuery = (params: SpcApiIncomingInspectionsIncomingInspectionIdGetRequest) => {
  return useQuery({
    ...incoming.incomingInspectionsIncomingInspectionIdGet(params),
    retry: 1,
  });
};
