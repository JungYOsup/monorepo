import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdReworkPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDREWORK_QUERY_KEY = "WORKSWORKIDREWORK";

export const worksWorkIdReworkMutate = createMutationKeys(WORKSWORKIDREWORK_QUERY_KEY, {
  worksWorkIdReworkPut: (params: ProductionActionApiWorksWorkIdReworkPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdReworkPut(params),
    };
  },
});

export const worksWorkIdReworkQueryKeys = worksWorkIdReworkMutate;