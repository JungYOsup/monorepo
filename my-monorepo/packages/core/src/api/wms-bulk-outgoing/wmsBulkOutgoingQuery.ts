import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsBulkOutgoingPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSBULKOUTGOING_QUERY_KEY = "WMSBULKOUTGOING";

export const wmsBulkOutgoingMutate = createMutationKeys(WMSBULKOUTGOING_QUERY_KEY, {
  wmsBulkOutgoingPost: (params: DefaultApiWmsBulkOutgoingPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsBulkOutgoingPost(params),
    };
  },
});

export const wmsBulkOutgoingQueryKeys = wmsBulkOutgoingMutate;