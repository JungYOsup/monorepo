import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdBulkConsumeSubsidiaryPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDBULKCONSUMESUBSIDIARY_QUERY_KEY = "WORKSWORKIDBULKCONSUMESUBSIDIARY";

export const worksWorkIdBulkConsumeSubsidiaryMutate = createMutationKeys(WORKSWORKIDBULKCONSUMESUBSIDIARY_QUERY_KEY, {
  worksWorkIdBulkConsumeSubsidiaryPut: (params: ProductionActionApiWorksWorkIdBulkConsumeSubsidiaryPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdBulkConsumeSubsidiaryPut(params),
    };
  },
});

export const worksWorkIdBulkConsumeSubsidiaryQueryKeys = worksWorkIdBulkConsumeSubsidiaryMutate;