import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushErpOutsourcingRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHERPOUTSOURCINGRECORD_QUERY_KEY = "ERPSYNCPUSHERPOUTSOURCINGRECORD";

export const erpSyncPushErpOutsourcingRecordMutate = createMutationKeys(ERPSYNCPUSHERPOUTSOURCINGRECORD_QUERY_KEY, {
  erpSyncPushErpOutsourcingRecordPost: (params: DefaultApiErpSyncPushErpOutsourcingRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushErpOutsourcingRecordPost(params),
    };
  },
});

export const erpSyncPushErpOutsourcingRecordQueryKeys = erpSyncPushErpOutsourcingRecordMutate;