import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushDeletedErpOutsourcingWorkPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHDELETEDERPOUTSOURCINGWORK_QUERY_KEY = "ERPSYNCPUSHDELETEDERPOUTSOURCINGWORK";

export const erpSyncPushDeletedErpOutsourcingWorkMutate = createMutationKeys(ERPSYNCPUSHDELETEDERPOUTSOURCINGWORK_QUERY_KEY, {
  erpSyncPushDeletedErpOutsourcingWorkPost: (params: DefaultApiErpSyncPushDeletedErpOutsourcingWorkPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushDeletedErpOutsourcingWorkPost(params),
    };
  },
});

export const erpSyncPushDeletedErpOutsourcingWorkQueryKeys = erpSyncPushDeletedErpOutsourcingWorkMutate;