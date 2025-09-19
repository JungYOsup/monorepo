import { worksWorkIdDefectProductionPlanLotsMutate } from "@core/api/works-work-id-defect-production-plan-lots/worksWorkIdDefectProductionPlanLotsQuery";
import { ProductionActionApiWorksWorkIdDefectProductionPlanLotsPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdDefectProductionPlanLotsWorksWorkIdDefectProductionPlanLotsPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdDefectProductionPlanLotsPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdDefectProductionPlanLotsPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdDefectProductionPlanLotsPutRequest) => worksWorkIdDefectProductionPlanLotsMutate.worksWorkIdDefectProductionPlanLotsPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
