import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsBatchPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSBATCH_QUERY_KEY = "WMSBATCH";

export const wmsBatchMutate = createMutationKeys(WMSBATCH_QUERY_KEY, {
  wmsBatchPost: (params: DefaultApiWmsBatchPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsBatchPost(params),
    };
  },
});

export const wmsBatchQueryKeys = wmsBatchMutate;