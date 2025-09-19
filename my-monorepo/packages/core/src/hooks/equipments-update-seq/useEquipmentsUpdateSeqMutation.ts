import { equipmentsUpdateSeqMutate } from "@core/api/equipments-update-seq/equipmentsUpdateSeqQuery";
import { MasterApiEquipmentsUpdateSeqPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useEquipmentsUpdateSeqEquipmentsUpdateSeqPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiEquipmentsUpdateSeqPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["equipmentsUpdateSeqPost"],
    mutationFn: (params: MasterApiEquipmentsUpdateSeqPostRequest) => equipmentsUpdateSeqMutate.equipmentsUpdateSeqPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
