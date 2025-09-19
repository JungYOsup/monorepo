import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsWorkLogIdCancelConsumeSubsidiaryPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSWORKLOGIDCANCELCONSUMESUBSIDIARY_QUERY_KEY = "WORKLOGSWORKLOGIDCANCELCONSUMESUBSIDIARY";

export const workLogsWorkLogIdCancelConsumeSubsidiaryMutate = createMutationKeys(WORKLOGSWORKLOGIDCANCELCONSUMESUBSIDIARY_QUERY_KEY, {
  workLogsWorkLogIdCancelConsumeSubsidiaryPut: (params: ProductionActionApiWorkLogsWorkLogIdCancelConsumeSubsidiaryPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsWorkLogIdCancelConsumeSubsidiaryPut(params),
    };
  },
});

export const workLogsWorkLogIdCancelConsumeSubsidiaryQueryKeys = workLogsWorkLogIdCancelConsumeSubsidiaryMutate;