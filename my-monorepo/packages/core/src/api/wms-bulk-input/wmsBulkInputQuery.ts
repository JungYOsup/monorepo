import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsBulkInputPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSBULKINPUT_QUERY_KEY = "WMSBULKINPUT";

export const wmsBulkInputMutate = createMutationKeys(WMSBULKINPUT_QUERY_KEY, {
  wmsBulkInputPost: (params: DefaultApiWmsBulkInputPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsBulkInputPost(params),
    };
  },
});

export const wmsBulkInputQueryKeys = wmsBulkInputMutate;