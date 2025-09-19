import { equipmentsCorrectionMutate } from "@core/api/equipments-correction/equipmentsCorrectionQuery";
import { ProductionActionApiEquipmentsCorrectionPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useEquipmentsCorrectionEquipmentsCorrectionPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiEquipmentsCorrectionPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["equipmentsCorrectionPut"],
    mutationFn: (params: ProductionActionApiEquipmentsCorrectionPutRequest) => equipmentsCorrectionMutate.equipmentsCorrectionPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
