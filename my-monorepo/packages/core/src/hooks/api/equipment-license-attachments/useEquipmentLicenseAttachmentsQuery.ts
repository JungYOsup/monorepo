import { equipmentLicenseAttachments } from "@core/api/equipment-license-attachments/equipmentLicenseAttachmentsQuery";
import { MasterApiEquipmentLicenseAttachmentsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useEquipmentLicenseAttachmentsEquipmentLicenseAttachmentsGetQuery = (params: MasterApiEquipmentLicenseAttachmentsGetRequest) => {
  return useQuery({
    ...equipmentLicenseAttachments.equipmentLicenseAttachmentsGet(params),
    retry: 1,
  });
};
