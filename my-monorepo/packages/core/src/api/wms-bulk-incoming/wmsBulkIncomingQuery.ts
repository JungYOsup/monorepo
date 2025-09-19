import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsBulkIncomingPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSBULKINCOMING_QUERY_KEY = "WMSBULKINCOMING";

export const wmsBulkIncomingMutate = createMutationKeys(WMSBULKINCOMING_QUERY_KEY, {
  wmsBulkIncomingPost: (params: DefaultApiWmsBulkIncomingPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsBulkIncomingPost(params),
    };
  },
});

export const wmsBulkIncomingQueryKeys = wmsBulkIncomingMutate;