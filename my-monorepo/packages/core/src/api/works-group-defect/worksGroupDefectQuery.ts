import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksGroupDefectPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSGROUPDEFECT_QUERY_KEY = "WORKSGROUPDEFECT";

export const worksGroupDefectMutate = createMutationKeys(WORKSGROUPDEFECT_QUERY_KEY, {
  worksGroupDefectPut: (params: ProductionActionApiWorksGroupDefectPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksGroupDefectPut(params),
    };
  },
});

export const worksGroupDefectQueryKeys = worksGroupDefectMutate;