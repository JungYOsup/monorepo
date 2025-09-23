import { equipment } from "@core/api/equipment/equipmentQuery";
import { MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useEquipmentEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGetQuery = (params: MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGetRequest) => {
  return useQuery({
    ...equipment.equipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGet(params),
    retry: 1,
  });
};
