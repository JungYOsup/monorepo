import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdAdjustPerformancePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDADJUSTPERFORMANCE_QUERY_KEY = "WORKSWORKIDADJUSTPERFORMANCE";

export const worksWorkIdAdjustPerformanceMutate = createMutationKeys(WORKSWORKIDADJUSTPERFORMANCE_QUERY_KEY, {
  worksWorkIdAdjustPerformancePut: (params: ProductionActionApiWorksWorkIdAdjustPerformancePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdAdjustPerformancePut(params),
    };
  },
});

export const worksWorkIdAdjustPerformanceQueryKeys = worksWorkIdAdjustPerformanceMutate;