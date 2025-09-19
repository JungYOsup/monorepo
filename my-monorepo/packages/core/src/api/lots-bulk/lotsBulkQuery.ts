import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiLotsBulkDeleteRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const LOTSBULK_QUERY_KEY = "LOTSBULK";

export const lotsBulkMutate = createMutationKeys(LOTSBULK_QUERY_KEY, {
  lotsBulkDelete: (params: DefaultApiLotsBulkDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.lotsBulkDelete(params),
    };
  },
});

export const lotsBulkQueryKeys = lotsBulkMutate;