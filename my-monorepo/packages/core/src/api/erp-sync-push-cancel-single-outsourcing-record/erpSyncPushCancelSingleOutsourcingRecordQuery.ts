import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushCancelSingleOutsourcingRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHCANCELSINGLEOUTSOURCINGRECORD_QUERY_KEY = "ERPSYNCPUSHCANCELSINGLEOUTSOURCINGRECORD";

export const erpSyncPushCancelSingleOutsourcingRecordMutate = createMutationKeys(ERPSYNCPUSHCANCELSINGLEOUTSOURCINGRECORD_QUERY_KEY, {
  erpSyncPushCancelSingleOutsourcingRecordPost: (params: DefaultApiErpSyncPushCancelSingleOutsourcingRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushCancelSingleOutsourcingRecordPost(params),
    };
  },
});

export const erpSyncPushCancelSingleOutsourcingRecordQueryKeys = erpSyncPushCancelSingleOutsourcingRecordMutate;