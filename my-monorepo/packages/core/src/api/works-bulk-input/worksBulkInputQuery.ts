import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksBulkInputPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSBULKINPUT_QUERY_KEY = "WORKSBULKINPUT";

export const worksBulkInputMutate = createMutationKeys(WORKSBULKINPUT_QUERY_KEY, {
  worksBulkInputPut: (params: ProductionActionApiWorksBulkInputPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksBulkInputPut(params),
    };
  },
});

export const worksBulkInputQueryKeys = worksBulkInputMutate;