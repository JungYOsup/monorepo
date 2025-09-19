import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsBulkDiligencePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSBULKDILIGENCE_QUERY_KEY = "WMSBULKDILIGENCE";

export const wmsBulkDiligenceMutate = createMutationKeys(WMSBULKDILIGENCE_QUERY_KEY, {
  wmsBulkDiligencePut: (params: DefaultApiWmsBulkDiligencePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsBulkDiligencePut(params),
    };
  },
});

export const wmsBulkDiligenceQueryKeys = wmsBulkDiligenceMutate;