import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGetRequest,
  MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDeleteRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const EQUIPMENT_QUERY_KEY = "EQUIPMENT";

export const equipment = createQueryKeys(EQUIPMENT_QUERY_KEY, {
  equipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGet: (params: MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.equipmentLicenseAttachmentsEquipmentLicenseAttachmentIdGet(params),
    };
  },
});

export const equipmentMutate = createMutationKeys(EQUIPMENT_QUERY_KEY, {
  equipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDelete: (params: MasterApiEquipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.equipmentLicenseAttachmentsEquipmentLicenseAttachmentIdDelete(params),
    };
  },
});

export const equipmentQueryKeys = mergeQueryKeys(equipment, equipmentMutate);