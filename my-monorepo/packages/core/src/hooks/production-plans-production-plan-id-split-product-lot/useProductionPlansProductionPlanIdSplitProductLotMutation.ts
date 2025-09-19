import { productionPlansProductionPlanIdSplitProductLotMutate } from "@core/api/production-plans-production-plan-id-split-product-lot/productionPlansProductionPlanIdSplitProductLotQuery";
import { ProductionActionApiProductionPlansProductionPlanIdSplitProductLotPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useProductionPlansProductionPlanIdSplitProductLotProductionPlansProductionPlanIdSplitProductLotPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiProductionPlansProductionPlanIdSplitProductLotPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["productionPlansProductionPlanIdSplitProductLotPost"],
    mutationFn: (params: ProductionActionApiProductionPlansProductionPlanIdSplitProductLotPostRequest) => productionPlansProductionPlanIdSplitProductLotMutate.productionPlansProductionPlanIdSplitProductLotPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
