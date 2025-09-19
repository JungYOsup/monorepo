import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushPushSingleOutsourcingRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHPUSHSINGLEOUTSOURCINGRECORD_QUERY_KEY = "ERPSYNCPUSHPUSHSINGLEOUTSOURCINGRECORD";

export const erpSyncPushPushSingleOutsourcingRecordMutate = createMutationKeys(ERPSYNCPUSHPUSHSINGLEOUTSOURCINGRECORD_QUERY_KEY, {
  erpSyncPushPushSingleOutsourcingRecordPost: (params: DefaultApiErpSyncPushPushSingleOutsourcingRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushPushSingleOutsourcingRecordPost(params),
    };
  },
});

export const erpSyncPushPushSingleOutsourcingRecordQueryKeys = erpSyncPushPushSingleOutsourcingRecordMutate;