import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdRecycleScrapPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDRECYCLESCRAP_QUERY_KEY = "WORKSWORKIDRECYCLESCRAP";

export const worksWorkIdRecycleScrapMutate = createMutationKeys(WORKSWORKIDRECYCLESCRAP_QUERY_KEY, {
  worksWorkIdRecycleScrapPut: (params: ProductionActionApiWorksWorkIdRecycleScrapPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdRecycleScrapPut(params),
    };
  },
});

export const worksWorkIdRecycleScrapQueryKeys = worksWorkIdRecycleScrapMutate;