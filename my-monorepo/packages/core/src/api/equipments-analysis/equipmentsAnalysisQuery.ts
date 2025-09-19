import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiEquipmentsAnalysisPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const EQUIPMENTSANALYSIS_QUERY_KEY = "EQUIPMENTSANALYSIS";

export const equipmentsAnalysisMutate = createMutationKeys(EQUIPMENTSANALYSIS_QUERY_KEY, {
  equipmentsAnalysisPost: (params: MasterApiEquipmentsAnalysisPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.equipmentsAnalysisPost(params),
    };
  },
});

export const equipmentsAnalysisQueryKeys = equipmentsAnalysisMutate;