import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdPerformancePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDPERFORMANCE_QUERY_KEY = "WORKSWORKIDPERFORMANCE";

export const worksWorkIdPerformanceMutate = createMutationKeys(WORKSWORKIDPERFORMANCE_QUERY_KEY, {
  worksWorkIdPerformancePut: (params: ProductionActionApiWorksWorkIdPerformancePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdPerformancePut(params),
    };
  },
});

export const worksWorkIdPerformanceQueryKeys = worksWorkIdPerformanceMutate;