import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsWorkLogIdCancelDefectPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKLOGIDCANCELDEFECT_QUERY_KEY = "WORKLOGSWORKLOGIDCANCELDEFECT";

export const workLogsWorkLogIdCancelDefectMutate = createMutationKeys(WORKLOGSWORKLOGIDCANCELDEFECT_QUERY_KEY, {
  workLogsWorkLogIdCancelDefectPut: (params: ProductionActionApiWorkLogsWorkLogIdCancelDefectPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsWorkLogIdCancelDefectPut(params),
    };
  },
});

export const workLogsWorkLogIdCancelDefectQueryKeys = workLogsWorkLogIdCancelDefectMutate;