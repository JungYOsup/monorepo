import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiErpSyncDeleteErpSplitOutsourcingRecordPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ERPSYNCDELETEERPSPLITOUTSOURCINGRECORD_QUERY_KEY = "ERPSYNCDELETEERPSPLITOUTSOURCINGRECORD";

export const erpSyncDeleteErpSplitOutsourcingRecordMutate = createMutationKeys(ERPSYNCDELETEERPSPLITOUTSOURCINGRECORD_QUERY_KEY, {
  erpSyncDeleteErpSplitOutsourcingRecordPost: (params: DefaultApiErpSyncDeleteErpSplitOutsourcingRecordPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.erpSyncDeleteErpSplitOutsourcingRecordPost(params),
    };
  },
});

export const erpSyncDeleteErpSplitOutsourcingRecordQueryKeys = erpSyncDeleteErpSplitOutsourcingRecordMutate;