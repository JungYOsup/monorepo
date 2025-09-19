import { equipmentMutate } from "@core/api/equipment/equipmentQuery";
import { MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDeleteRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useEquipmentEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["equipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDelete"],
    mutationFn: (params: MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDeleteRequest) => equipmentMutate.equipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
