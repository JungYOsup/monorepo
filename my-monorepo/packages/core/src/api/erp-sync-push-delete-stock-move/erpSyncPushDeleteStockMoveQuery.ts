import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushDeleteStockMovePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHDELETESTOCKMOVE_QUERY_KEY = "ERPSYNCPUSHDELETESTOCKMOVE";

export const erpSyncPushDeleteStockMoveMutate = createMutationKeys(ERPSYNCPUSHDELETESTOCKMOVE_QUERY_KEY, {
  erpSyncPushDeleteStockMovePost: (params: DefaultApiErpSyncPushDeleteStockMovePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushDeleteStockMovePost(params),
    };
  },
});

export const erpSyncPushDeleteStockMoveQueryKeys = erpSyncPushDeleteStockMoveMutate;