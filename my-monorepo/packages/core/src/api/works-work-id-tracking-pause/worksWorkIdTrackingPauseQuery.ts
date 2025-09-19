import { TrackingInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionTimeTrackingActionApiWorksWorkIdTrackingPausePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDTRACKINGPAUSE_QUERY_KEY = "WORKSWORKIDTRACKINGPAUSE";

export const worksWorkIdTrackingPauseMutate = createMutationKeys(WORKSWORKIDTRACKINGPAUSE_QUERY_KEY, {
  worksWorkIdTrackingPausePost: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingPausePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => TrackingInstance.worksWorkIdTrackingPausePost(params),
    };
  },
});

export const worksWorkIdTrackingPauseQueryKeys = worksWorkIdTrackingPauseMutate;