import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdDefectProductionPlanLotsPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDDEFECTPRODUCTIONPLANLOTS_QUERY_KEY = "WORKSWORKIDDEFECTPRODUCTIONPLANLOTS";

export const worksWorkIdDefectProductionPlanLotsMutate = createMutationKeys(WORKSWORKIDDEFECTPRODUCTIONPLANLOTS_QUERY_KEY, {
  worksWorkIdDefectProductionPlanLotsPut: (params: ProductionActionApiWorksWorkIdDefectProductionPlanLotsPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdDefectProductionPlanLotsPut(params),
    };
  },
});

export const worksWorkIdDefectProductionPlanLotsQueryKeys = worksWorkIdDefectProductionPlanLotsMutate;