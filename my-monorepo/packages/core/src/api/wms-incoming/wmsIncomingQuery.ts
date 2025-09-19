import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsIncomingPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSINCOMING_QUERY_KEY = "WMSINCOMING";

export const wmsIncomingMutate = createMutationKeys(WMSINCOMING_QUERY_KEY, {
  wmsIncomingPost: (params: DefaultApiWmsIncomingPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsIncomingPost(params),
    };
  },
});

export const wmsIncomingQueryKeys = wmsIncomingMutate;