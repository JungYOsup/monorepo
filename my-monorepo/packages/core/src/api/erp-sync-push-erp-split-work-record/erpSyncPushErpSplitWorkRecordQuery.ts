import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncPushErpSplitWorkRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCPUSHERPSPLITWORKRECORD_QUERY_KEY = "ERPSYNCPUSHERPSPLITWORKRECORD";

export const erpSyncPushErpSplitWorkRecordMutate = createMutationKeys(ERPSYNCPUSHERPSPLITWORKRECORD_QUERY_KEY, {
  erpSyncPushErpSplitWorkRecordPost: (params: DefaultApiErpSyncPushErpSplitWorkRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncPushErpSplitWorkRecordPost(params),
    };
  },
});

export const erpSyncPushErpSplitWorkRecordQueryKeys = erpSyncPushErpSplitWorkRecordMutate;