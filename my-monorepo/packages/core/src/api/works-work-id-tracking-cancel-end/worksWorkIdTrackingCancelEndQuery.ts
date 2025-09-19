import { TrackingInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionTimeTrackingActionApiWorksWorkIdTrackingCancelEndPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDTRACKINGCANCELEND_QUERY_KEY = "WORKSWORKIDTRACKINGCANCELEND";

export const worksWorkIdTrackingCancelEndMutate = createMutationKeys(WORKSWORKIDTRACKINGCANCELEND_QUERY_KEY, {
  worksWorkIdTrackingCancelEndPost: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingCancelEndPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => TrackingInstance.worksWorkIdTrackingCancelEndPost(params),
    };
  },
});

export const worksWorkIdTrackingCancelEndQueryKeys = worksWorkIdTrackingCancelEndMutate;