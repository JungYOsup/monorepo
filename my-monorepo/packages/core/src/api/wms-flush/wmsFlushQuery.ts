import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsFlushPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSFLUSH_QUERY_KEY = "WMSFLUSH";

export const wmsFlushMutate = createMutationKeys(WMSFLUSH_QUERY_KEY, {
  wmsFlushPut: (params: DefaultApiWmsFlushPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsFlushPut(params),
    };
  },
});

export const wmsFlushQueryKeys = wmsFlushMutate;