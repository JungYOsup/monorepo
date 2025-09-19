import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsWorkLogIdCancelEndPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKLOGIDCANCELEND_QUERY_KEY = "WORKLOGSWORKLOGIDCANCELEND";

export const workLogsWorkLogIdCancelEndMutate = createMutationKeys(WORKLOGSWORKLOGIDCANCELEND_QUERY_KEY, {
  workLogsWorkLogIdCancelEndPut: (params: ProductionActionApiWorkLogsWorkLogIdCancelEndPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsWorkLogIdCancelEndPut(params),
    };
  },
});

export const workLogsWorkLogIdCancelEndQueryKeys = workLogsWorkLogIdCancelEndMutate;