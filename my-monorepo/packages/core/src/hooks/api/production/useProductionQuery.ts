import { production } from "@core/api/production/productionQuery";
import { DefaultApiProductionPlansConsumedLotIdLotIdGetRequest, DefaultApiProductionPlansProductionLotIdLotIdGetRequest, DefaultApiProductionPlansProductionPlanIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useProductionProductionPlansConsumedLotIdLotIdGetQuery = (params: DefaultApiProductionPlansConsumedLotIdLotIdGetRequest) => {
  return useQuery({
    ...production.productionPlansConsumedLotIdLotIdGet(params),
    retry: 1,
  });
};

export const useProductionProductionPlansProductionLotIdLotIdGetQuery = (params: DefaultApiProductionPlansProductionLotIdLotIdGetRequest) => {
  return useQuery({
    ...production.productionPlansProductionLotIdLotIdGet(params),
    retry: 1,
  });
};

export const useProductionProductionPlansProductionPlanIdGetQuery = (params: DefaultApiProductionPlansProductionPlanIdGetRequest) => {
  return useQuery({
    ...production.productionPlansProductionPlanIdGet(params),
    retry: 1,
  });
};
