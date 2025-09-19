import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdStartPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDSTART_QUERY_KEY = "WORKSWORKIDSTART";

export const worksWorkIdStartMutate = createMutationKeys(WORKSWORKIDSTART_QUERY_KEY, {
  worksWorkIdStartPut: (params: ProductionActionApiWorksWorkIdStartPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdStartPut(params),
    };
  },
});

export const worksWorkIdStartQueryKeys = worksWorkIdStartMutate;