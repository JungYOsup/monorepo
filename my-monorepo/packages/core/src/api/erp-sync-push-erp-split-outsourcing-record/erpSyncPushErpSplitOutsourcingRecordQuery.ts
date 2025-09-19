import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushErpSplitOutsourcingRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHERPSPLITOUTSOURCINGRECORD_QUERY_KEY = "ERPSYNCPUSHERPSPLITOUTSOURCINGRECORD";

export const erpSyncPushErpSplitOutsourcingRecordMutate = createMutationKeys(ERPSYNCPUSHERPSPLITOUTSOURCINGRECORD_QUERY_KEY, {
  erpSyncPushErpSplitOutsourcingRecordPost: (params: DefaultApiErpSyncPushErpSplitOutsourcingRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushErpSplitOutsourcingRecordPost(params),
    };
  },
});

export const erpSyncPushErpSplitOutsourcingRecordQueryKeys = erpSyncPushErpSplitOutsourcingRecordMutate;