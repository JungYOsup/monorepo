import { slitting } from "@core/api/slitting/slittingQuery";
import { DefaultApiSlittingWorksOrderGroupSlittingWorkOrderGroupIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSlittingSlittingWorksOrderGroupSlittingWorkOrderGroupIdGetQuery = (params: DefaultApiSlittingWorksOrderGroupSlittingWorkOrderGroupIdGetRequest) => {
  return useQuery({
    ...slitting.slittingWorksOrderGroupSlittingWorkOrderGroupIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
