import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncDeleteErpSplitWorkRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCDELETEERPSPLITWORKRECORD_QUERY_KEY = "ERPSYNCDELETEERPSPLITWORKRECORD";

export const erpSyncDeleteErpSplitWorkRecordMutate = createMutationKeys(ERPSYNCDELETEERPSPLITWORKRECORD_QUERY_KEY, {
  erpSyncDeleteErpSplitWorkRecordPost: (params: DefaultApiErpSyncDeleteErpSplitWorkRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncDeleteErpSplitWorkRecordPost(params),
    };
  },
});

export const erpSyncDeleteErpSplitWorkRecordQueryKeys = erpSyncDeleteErpSplitWorkRecordMutate;