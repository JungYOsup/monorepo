import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiEquipmentsGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const EQUIPMENTS_QUERY_KEY = "EQUIPMENTS";

export const equipments = createQueryKeys(EQUIPMENTS_QUERY_KEY, {
  equipmentsGet: (params: DefaultApiEquipmentsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.equipmentsGet(params),
    };
  },
});

export const equipmentsQueryKeys = equipments;