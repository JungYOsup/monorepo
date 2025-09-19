import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsWorkLogIdCancelInputPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKLOGIDCANCELINPUT_QUERY_KEY = "WORKLOGSWORKLOGIDCANCELINPUT";

export const workLogsWorkLogIdCancelInputMutate = createMutationKeys(WORKLOGSWORKLOGIDCANCELINPUT_QUERY_KEY, {
  workLogsWorkLogIdCancelInputPut: (params: ProductionActionApiWorkLogsWorkLogIdCancelInputPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsWorkLogIdCancelInputPut(params),
    };
  },
});

export const workLogsWorkLogIdCancelInputQueryKeys = workLogsWorkLogIdCancelInputMutate;