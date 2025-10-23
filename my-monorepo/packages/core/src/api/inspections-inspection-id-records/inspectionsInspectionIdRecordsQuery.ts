import { SpcInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiInspectionsInspectionIdRecordsPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INSPECTIONSINSPECTIONIDRECORDS_QUERY_KEY = "INSPECTIONSINSPECTIONIDRECORDS";

export const inspectionsInspectionIdRecordsMutate = createMutationKeys(INSPECTIONSINSPECTIONIDRECORDS_QUERY_KEY, {
  inspectionsInspectionIdRecordsPut: (params: SpcApiInspectionsInspectionIdRecordsPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.inspectionsInspectionIdRecordsPut(params),
    };
  },
});

export const inspectionsInspectionIdRecordsQueryKeys = inspectionsInspectionIdRecordsMutate;