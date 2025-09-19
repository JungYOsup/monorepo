import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksGroupFakeDefectPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSGROUPFAKEDEFECT_QUERY_KEY = "WORKSGROUPFAKEDEFECT";

export const worksGroupFakeDefectMutate = createMutationKeys(WORKSGROUPFAKEDEFECT_QUERY_KEY, {
  worksGroupFakeDefectPut: (params: ProductionActionApiWorksGroupFakeDefectPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksGroupFakeDefectPut(params),
    };
  },
});

export const worksGroupFakeDefectQueryKeys = worksGroupFakeDefectMutate;