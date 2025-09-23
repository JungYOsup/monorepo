import { incomingInspections } from "@core/api/incoming-inspections/incomingInspectionsQuery";
import { SpcApiIncomingInspectionsFindPostRequest, SpcApiIncomingInspectionsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useIncomingInspectionsIncomingInspectionsFindPostQuery = (params: SpcApiIncomingInspectionsFindPostRequest) => {
  return useQuery({
    ...incomingInspections.incomingInspectionsFindPost(params),
    enabled: !!params,
  });
};

export const useIncomingInspectionsIncomingInspectionsGetQuery = (params: SpcApiIncomingInspectionsGetRequest) => {
  return useQuery({
    ...incomingInspections.incomingInspectionsGet(params),
    retry: 1,
  });
};
