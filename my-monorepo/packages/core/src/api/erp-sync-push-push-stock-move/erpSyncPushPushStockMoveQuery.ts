import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushPushStockMovePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHPUSHSTOCKMOVE_QUERY_KEY = "ERPSYNCPUSHPUSHSTOCKMOVE";

export const erpSyncPushPushStockMoveMutate = createMutationKeys(ERPSYNCPUSHPUSHSTOCKMOVE_QUERY_KEY, {
  erpSyncPushPushStockMovePost: (params: DefaultApiErpSyncPushPushStockMovePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushPushStockMovePost(params),
    };
  },
});

export const erpSyncPushPushStockMoveQueryKeys = erpSyncPushPushStockMoveMutate;