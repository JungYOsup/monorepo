import { productionPlansWorkLogIdCancelSplitProductLotMutate } from "@core/api/production-plans-work-log-id-cancel-split-product-lot/productionPlansWorkLogIdCancelSplitProductLotQuery";
import { ProductionActionApiProductionPlansWorkLogIdCancelSplitProductLotPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useProductionPlansWorkLogIdCancelSplitProductLotProductionPlansWorkLogIdCancelSplitProductLotPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiProductionPlansWorkLogIdCancelSplitProductLotPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["productionPlansWorkLogIdCancelSplitProductLotPost"],
    mutationFn: (params: ProductionActionApiProductionPlansWorkLogIdCancelSplitProductLotPostRequest) => productionPlansWorkLogIdCancelSplitProductLotMutate.productionPlansWorkLogIdCancelSplitProductLotPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
