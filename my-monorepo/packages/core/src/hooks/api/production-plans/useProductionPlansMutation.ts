import { productionPlansMutate } from "@core/api/production-plans/productionPlansQuery";
import { DefaultApiProductionPlansPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useProductionPlansProductionPlansPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiProductionPlansPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["productionPlansPost"],
    mutationFn: (params: DefaultApiProductionPlansPostRequest) => productionPlansMutate.productionPlansPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
