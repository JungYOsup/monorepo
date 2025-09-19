import { TrackingInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionTimeTrackingActionApiWorksWorkIdTrackingEndPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDTRACKINGEND_QUERY_KEY = "WORKSWORKIDTRACKINGEND";

export const worksWorkIdTrackingEndMutate = createMutationKeys(WORKSWORKIDTRACKINGEND_QUERY_KEY, {
  worksWorkIdTrackingEndPost: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingEndPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => TrackingInstance.worksWorkIdTrackingEndPost(params),
    };
  },
});

export const worksWorkIdTrackingEndQueryKeys = worksWorkIdTrackingEndMutate;