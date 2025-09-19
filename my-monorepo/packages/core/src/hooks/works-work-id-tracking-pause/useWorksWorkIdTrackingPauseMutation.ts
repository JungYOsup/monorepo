import { worksWorkIdTrackingPauseMutate } from "@core/api/works-work-id-tracking-pause/worksWorkIdTrackingPauseQuery";
import { ProductionTimeTrackingActionApiWorksWorkIdTrackingPausePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdTrackingPauseWorksWorkIdTrackingPausePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionTimeTrackingActionApiWorksWorkIdTrackingPausePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdTrackingPausePost"],
    mutationFn: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingPausePostRequest) => worksWorkIdTrackingPauseMutate.worksWorkIdTrackingPausePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
