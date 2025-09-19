import { productionMutate } from "@core/api/production/productionQuery";
import { DefaultApiProductionPlansProductionPlanIdDeleteRequest, DefaultApiProductionPlansProductionPlanIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useProductionProductionPlansProductionPlanIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiProductionPlansProductionPlanIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["productionPlansProductionPlanIdDelete"],
    mutationFn: (params: DefaultApiProductionPlansProductionPlanIdDeleteRequest) => productionMutate.productionPlansProductionPlanIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useProductionProductionPlansProductionPlanIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiProductionPlansProductionPlanIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["productionPlansProductionPlanIdPut"],
    mutationFn: (params: DefaultApiProductionPlansProductionPlanIdPutRequest) => productionMutate.productionPlansProductionPlanIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
