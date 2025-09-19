import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsClosePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSCLOSE_QUERY_KEY = "WMSCLOSE";

export const wmsCloseMutate = createMutationKeys(WMSCLOSE_QUERY_KEY, {
  wmsClosePost: (params: DefaultApiWmsClosePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsClosePost(params),
    };
  },
});

export const wmsCloseQueryKeys = wmsCloseMutate;