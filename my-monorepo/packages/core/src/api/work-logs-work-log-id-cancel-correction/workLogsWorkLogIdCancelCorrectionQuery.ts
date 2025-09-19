import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsWorkLogIdCancelCorrectionPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKLOGIDCANCELCORRECTION_QUERY_KEY = "WORKLOGSWORKLOGIDCANCELCORRECTION";

export const workLogsWorkLogIdCancelCorrectionMutate = createMutationKeys(WORKLOGSWORKLOGIDCANCELCORRECTION_QUERY_KEY, {
  workLogsWorkLogIdCancelCorrectionPut: (params: ProductionActionApiWorkLogsWorkLogIdCancelCorrectionPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsWorkLogIdCancelCorrectionPut(params),
    };
  },
});

export const workLogsWorkLogIdCancelCorrectionQueryKeys = workLogsWorkLogIdCancelCorrectionMutate;