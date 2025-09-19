import { lotsGetProductionPlanLotNameMutate } from "@core/api/lots-get-production-plan-lot-name/lotsGetProductionPlanLotNameQuery";
import { DefaultApiLotsGetProductionPlanLotNamePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLotsGetProductionPlanLotNameLotsGetProductionPlanLotNamePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLotsGetProductionPlanLotNamePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["lotsGetProductionPlanLotNamePost"],
    mutationFn: (params: DefaultApiLotsGetProductionPlanLotNamePostRequest) => lotsGetProductionPlanLotNameMutate.lotsGetProductionPlanLotNamePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
