import { TrackingInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionTimeTrackingActionApiWorksWorkIdTrackingResumePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDTRACKINGRESUME_QUERY_KEY = "WORKSWORKIDTRACKINGRESUME";

export const worksWorkIdTrackingResumeMutate = createMutationKeys(WORKSWORKIDTRACKINGRESUME_QUERY_KEY, {
  worksWorkIdTrackingResumePost: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingResumePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => TrackingInstance.worksWorkIdTrackingResumePost(params),
    };
  },
});

export const worksWorkIdTrackingResumeQueryKeys = worksWorkIdTrackingResumeMutate;