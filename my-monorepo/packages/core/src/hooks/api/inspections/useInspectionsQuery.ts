import { inspections } from "@core/api/inspections/inspectionsQuery";
import { SpcApiInspectionsFindPostRequest, SpcApiInspectionsGetRequest, SpcApiInspectionsInspectionIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useInspectionsInspectionsFindPostQuery = (params: SpcApiInspectionsFindPostRequest) => {
  return useQuery({
    ...inspections.inspectionsFindPost(params),
    enabled: !!params,
  });
};

export const useInspectionsInspectionsGetQuery = (params: SpcApiInspectionsGetRequest) => {
  return useQuery({
    ...inspections.inspectionsGet(params),
    retry: 1,
  });
};

export const useInspectionsInspectionsInspectionIdGetQuery = (params: SpcApiInspectionsInspectionIdGetRequest) => {
  return useQuery({
    ...inspections.inspectionsInspectionIdGet(params),
    retry: 1,
  });
};
