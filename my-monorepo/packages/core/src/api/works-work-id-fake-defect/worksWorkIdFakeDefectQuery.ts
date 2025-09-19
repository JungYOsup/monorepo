import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdFakeDefectPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDFAKEDEFECT_QUERY_KEY = "WORKSWORKIDFAKEDEFECT";

export const worksWorkIdFakeDefectMutate = createMutationKeys(WORKSWORKIDFAKEDEFECT_QUERY_KEY, {
  worksWorkIdFakeDefectPut: (params: ProductionActionApiWorksWorkIdFakeDefectPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdFakeDefectPut(params),
    };
  },
});

export const worksWorkIdFakeDefectQueryKeys = worksWorkIdFakeDefectMutate;