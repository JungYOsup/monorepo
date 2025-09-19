import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdConsumeSubsidiaryPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDCONSUMESUBSIDIARY_QUERY_KEY = "WORKSWORKIDCONSUMESUBSIDIARY";

export const worksWorkIdConsumeSubsidiaryMutate = createMutationKeys(WORKSWORKIDCONSUMESUBSIDIARY_QUERY_KEY, {
  worksWorkIdConsumeSubsidiaryPut: (params: ProductionActionApiWorksWorkIdConsumeSubsidiaryPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdConsumeSubsidiaryPut(params),
    };
  },
});

export const worksWorkIdConsumeSubsidiaryQueryKeys = worksWorkIdConsumeSubsidiaryMutate;