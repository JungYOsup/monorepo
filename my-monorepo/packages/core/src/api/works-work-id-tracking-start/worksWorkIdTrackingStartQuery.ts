import { TrackingInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionTimeTrackingActionApiWorksWorkIdTrackingStartPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDTRACKINGSTART_QUERY_KEY = "WORKSWORKIDTRACKINGSTART";

export const worksWorkIdTrackingStartMutate = createMutationKeys(WORKSWORKIDTRACKINGSTART_QUERY_KEY, {
  worksWorkIdTrackingStartPost: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingStartPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => TrackingInstance.worksWorkIdTrackingStartPost(params),
    };
  },
});

export const worksWorkIdTrackingStartQueryKeys = worksWorkIdTrackingStartMutate;