import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiEquipmentsUpdateSeqPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const EQUIPMENTSUPDATESEQ_QUERY_KEY = "EQUIPMENTSUPDATESEQ";

export const equipmentsUpdateSeqMutate = createMutationKeys(EQUIPMENTSUPDATESEQ_QUERY_KEY, {
  equipmentsUpdateSeqPost: (params: MasterApiEquipmentsUpdateSeqPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.equipmentsUpdateSeqPost(params),
    };
  },
});

export const equipmentsUpdateSeqQueryKeys = equipmentsUpdateSeqMutate;