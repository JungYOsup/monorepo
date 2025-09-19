import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsWorkLogIdCancelPerformancePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKLOGIDCANCELPERFORMANCE_QUERY_KEY = "WORKLOGSWORKLOGIDCANCELPERFORMANCE";

export const workLogsWorkLogIdCancelPerformanceMutate = createMutationKeys(WORKLOGSWORKLOGIDCANCELPERFORMANCE_QUERY_KEY, {
  workLogsWorkLogIdCancelPerformancePut: (params: ProductionActionApiWorkLogsWorkLogIdCancelPerformancePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsWorkLogIdCancelPerformancePut(params),
    };
  },
});

export const workLogsWorkLogIdCancelPerformanceQueryKeys = workLogsWorkLogIdCancelPerformanceMutate;