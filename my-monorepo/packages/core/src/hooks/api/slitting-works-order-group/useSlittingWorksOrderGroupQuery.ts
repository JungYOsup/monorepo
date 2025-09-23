import { slittingWorksOrderGroup } from "@core/api/slitting-works-order-group/slittingWorksOrderGroupQuery";
import { DefaultApiSlittingWorksOrderGroupGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSlittingWorksOrderGroupSlittingWorksOrderGroupGetQuery = (params: DefaultApiSlittingWorksOrderGroupGetRequest) => {
  return useQuery({
    ...slittingWorksOrderGroup.slittingWorksOrderGroupGet(params),
    retry: 1,
  });
};
