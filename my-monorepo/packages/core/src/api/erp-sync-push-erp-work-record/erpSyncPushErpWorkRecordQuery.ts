import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushErpWorkRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHERPWORKRECORD_QUERY_KEY = "ERPSYNCPUSHERPWORKRECORD";

export const erpSyncPushErpWorkRecordMutate = createMutationKeys(ERPSYNCPUSHERPWORKRECORD_QUERY_KEY, {
  erpSyncPushErpWorkRecordPost: (params: DefaultApiErpSyncPushErpWorkRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushErpWorkRecordPost(params),
    };
  },
});

export const erpSyncPushErpWorkRecordQueryKeys = erpSyncPushErpWorkRecordMutate;