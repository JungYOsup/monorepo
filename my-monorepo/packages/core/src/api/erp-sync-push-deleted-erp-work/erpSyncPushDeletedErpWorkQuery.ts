import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushDeletedErpWorkPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHDELETEDERPWORK_QUERY_KEY = "ERPSYNCPUSHDELETEDERPWORK";

export const erpSyncPushDeletedErpWorkMutate = createMutationKeys(ERPSYNCPUSHDELETEDERPWORK_QUERY_KEY, {
  erpSyncPushDeletedErpWorkPost: (params: DefaultApiErpSyncPushDeletedErpWorkPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushDeletedErpWorkPost(params),
    };
  },
});

export const erpSyncPushDeletedErpWorkQueryKeys = erpSyncPushDeletedErpWorkMutate;