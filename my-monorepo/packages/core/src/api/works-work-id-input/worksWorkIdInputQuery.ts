import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdInputPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDINPUT_QUERY_KEY = "WORKSWORKIDINPUT";

export const worksWorkIdInputMutate = createMutationKeys(WORKSWORKIDINPUT_QUERY_KEY, {
  worksWorkIdInputPut: (params: ProductionActionApiWorksWorkIdInputPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdInputPut(params),
    };
  },
});

export const worksWorkIdInputQueryKeys = worksWorkIdInputMutate;