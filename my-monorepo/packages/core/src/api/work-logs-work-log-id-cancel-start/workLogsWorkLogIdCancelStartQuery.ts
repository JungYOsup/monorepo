import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsWorkLogIdCancelStartPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKLOGIDCANCELSTART_QUERY_KEY = "WORKLOGSWORKLOGIDCANCELSTART";

export const workLogsWorkLogIdCancelStartMutate = createMutationKeys(WORKLOGSWORKLOGIDCANCELSTART_QUERY_KEY, {
  workLogsWorkLogIdCancelStartPut: (params: ProductionActionApiWorkLogsWorkLogIdCancelStartPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsWorkLogIdCancelStartPut(params),
    };
  },
});

export const workLogsWorkLogIdCancelStartQueryKeys = workLogsWorkLogIdCancelStartMutate;