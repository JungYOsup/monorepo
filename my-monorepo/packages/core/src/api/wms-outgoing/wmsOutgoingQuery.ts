import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsOutgoingPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSOUTGOING_QUERY_KEY = "WMSOUTGOING";

export const wmsOutgoingMutate = createMutationKeys(WMSOUTGOING_QUERY_KEY, {
  wmsOutgoingPost: (params: DefaultApiWmsOutgoingPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsOutgoingPost(params),
    };
  },
});

export const wmsOutgoingQueryKeys = wmsOutgoingMutate;