import { inspectionsActive } from "@core/api/inspections-active/inspectionsActiveQuery";
import { SpcApiInspectionsActiveGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useInspectionsActiveInspectionsActiveGetQuery = (params: SpcApiInspectionsActiveGetRequest) => {
  return useQuery({
    ...inspectionsActive.inspectionsActiveGet(params),
    retry: 1,
  });
};
