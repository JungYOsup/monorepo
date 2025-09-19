import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdDefectPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDDEFECT_QUERY_KEY = "WORKSWORKIDDEFECT";

export const worksWorkIdDefectMutate = createMutationKeys(WORKSWORKIDDEFECT_QUERY_KEY, {
  worksWorkIdDefectPut: (params: ProductionActionApiWorksWorkIdDefectPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdDefectPut(params),
    };
  },
});

export const worksWorkIdDefectQueryKeys = worksWorkIdDefectMutate;