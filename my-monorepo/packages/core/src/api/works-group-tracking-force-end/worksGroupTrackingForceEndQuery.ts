import { TrackingInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionTimeTrackingActionApiWorksGroupTrackingForceEndPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSGROUPTRACKINGFORCEEND_QUERY_KEY = "WORKSGROUPTRACKINGFORCEEND";

export const worksGroupTrackingForceEndMutate = createMutationKeys(WORKSGROUPTRACKINGFORCEEND_QUERY_KEY, {
  worksGroupTrackingForceEndPost: (params: ProductionTimeTrackingActionApiWorksGroupTrackingForceEndPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => TrackingInstance.worksGroupTrackingForceEndPost(params),
    };
  },
});

export const worksGroupTrackingForceEndQueryKeys = worksGroupTrackingForceEndMutate;