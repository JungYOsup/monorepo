import { productionPlans } from "@core/api/production-plans/productionPlansQuery";
import { DefaultApiProductionPlansFindPostRequest, DefaultApiProductionPlansGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useProductionPlansProductionPlansFindPostQuery = (params: DefaultApiProductionPlansFindPostRequest) => {
  return useQuery({
    ...productionPlans.productionPlansFindPost(params),
    enabled: !!params,
  });
};

export const useProductionPlansProductionPlansGetQuery = (params: DefaultApiProductionPlansGetRequest) => {
  return useQuery({
    ...productionPlans.productionPlansGet(params),
    retry: 1,
  });
};
