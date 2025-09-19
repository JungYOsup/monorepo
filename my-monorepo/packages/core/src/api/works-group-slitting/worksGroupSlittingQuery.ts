import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksGroupSlittingPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSGROUPSLITTING_QUERY_KEY = "WORKSGROUPSLITTING";

export const worksGroupSlittingMutate = createMutationKeys(WORKSGROUPSLITTING_QUERY_KEY, {
  worksGroupSlittingPut: (params: ProductionActionApiWorksGroupSlittingPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksGroupSlittingPut(params),
    };
  },
});

export const worksGroupSlittingQueryKeys = worksGroupSlittingMutate;