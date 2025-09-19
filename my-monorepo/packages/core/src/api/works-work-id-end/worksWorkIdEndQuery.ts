import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdEndPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDEND_QUERY_KEY = "WORKSWORKIDEND";

export const worksWorkIdEndMutate = createMutationKeys(WORKSWORKIDEND_QUERY_KEY, {
  worksWorkIdEndPut: (params: ProductionActionApiWorksWorkIdEndPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdEndPut(params),
    };
  },
});

export const worksWorkIdEndQueryKeys = worksWorkIdEndMutate;