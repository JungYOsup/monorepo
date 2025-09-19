import { SpcInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiInspectionsInspectionIdRecordPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INSPECTIONSINSPECTIONIDRECORD_QUERY_KEY = "INSPECTIONSINSPECTIONIDRECORD";

export const inspectionsInspectionIdRecordMutate = createMutationKeys(INSPECTIONSINSPECTIONIDRECORD_QUERY_KEY, {
  inspectionsInspectionIdRecordPut: (params: SpcApiInspectionsInspectionIdRecordPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.inspectionsInspectionIdRecordPut(params),
    };
  },
});

export const inspectionsInspectionIdRecordQueryKeys = inspectionsInspectionIdRecordMutate;