import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiEquipmentsCorrectionPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const EQUIPMENTSCORRECTION_QUERY_KEY = "EQUIPMENTSCORRECTION";

export const equipmentsCorrectionMutate = createMutationKeys(EQUIPMENTSCORRECTION_QUERY_KEY, {
  equipmentsCorrectionPut: (params: ProductionActionApiEquipmentsCorrectionPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.equipmentsCorrectionPut(params),
    };
  },
});

export const equipmentsCorrectionQueryKeys = equipmentsCorrectionMutate;