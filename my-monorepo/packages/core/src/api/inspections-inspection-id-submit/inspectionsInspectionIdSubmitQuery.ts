import { SpcInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiInspectionsInspectionIdSubmitPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INSPECTIONSINSPECTIONIDSUBMIT_QUERY_KEY = "INSPECTIONSINSPECTIONIDSUBMIT";

export const inspectionsInspectionIdSubmitMutate = createMutationKeys(INSPECTIONSINSPECTIONIDSUBMIT_QUERY_KEY, {
  inspectionsInspectionIdSubmitPost: (params: SpcApiInspectionsInspectionIdSubmitPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.inspectionsInspectionIdSubmitPost(params),
    };
  },
});

export const inspectionsInspectionIdSubmitQueryKeys = inspectionsInspectionIdSubmitMutate;