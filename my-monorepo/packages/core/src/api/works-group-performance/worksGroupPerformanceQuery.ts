import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksGroupPerformancePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSGROUPPERFORMANCE_QUERY_KEY = "WORKSGROUPPERFORMANCE";

export const worksGroupPerformanceMutate = createMutationKeys(WORKSGROUPPERFORMANCE_QUERY_KEY, {
  worksGroupPerformancePut: (params: ProductionActionApiWorksGroupPerformancePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksGroupPerformancePut(params),
    };
  },
});

export const worksGroupPerformanceQueryKeys = worksGroupPerformanceMutate;