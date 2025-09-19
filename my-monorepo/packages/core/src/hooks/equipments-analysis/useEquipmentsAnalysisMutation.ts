import { equipmentsAnalysisMutate } from "@core/api/equipments-analysis/equipmentsAnalysisQuery";
import { MasterApiEquipmentsAnalysisPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useEquipmentsAnalysisEquipmentsAnalysisPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiEquipmentsAnalysisPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["equipmentsAnalysisPost"],
    mutationFn: (params: MasterApiEquipmentsAnalysisPostRequest) => equipmentsAnalysisMutate.equipmentsAnalysisPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
