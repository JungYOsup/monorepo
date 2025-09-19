import { productionPlans } from "@core/api/production-plans/productionPlansQuery";
import { DefaultApiProductionPlansFindPostRequest, DefaultApiProductionPlansGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useProductionPlansProductionPlansFindPostQuery = (params: DefaultApiProductionPlansFindPostRequest) => {
  return useQuery({
    ...productionPlans.productionPlansFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useProductionPlansProductionPlansGetQuery = (params: DefaultApiProductionPlansGetRequest) => {
  return useQuery({
    ...productionPlans.productionPlansGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
