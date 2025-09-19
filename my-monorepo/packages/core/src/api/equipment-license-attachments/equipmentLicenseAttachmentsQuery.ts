import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiEquipmentLicenseAttachmentsGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const EQUIPMENTLICENSEATTACHMENTS_QUERY_KEY = "EQUIPMENTLICENSEATTACHMENTS";

export const equipmentLicenseAttachments = createQueryKeys(EQUIPMENTLICENSEATTACHMENTS_QUERY_KEY, {
  equipmentLicenseAttachmentsGet: (params: MasterApiEquipmentLicenseAttachmentsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.equipmentLicenseAttachmentsGet(params),
    };
  },
});

export const equipmentLicenseAttachmentsQueryKeys = equipmentLicenseAttachments;