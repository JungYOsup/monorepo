import { worksWorkIdTrackingCancelEndMutate } from "@core/api/works-work-id-tracking-cancel-end/worksWorkIdTrackingCancelEndQuery";
import { ProductionTimeTrackingActionApiWorksWorkIdTrackingCancelEndPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdTrackingCancelEndWorksWorkIdTrackingCancelEndPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionTimeTrackingActionApiWorksWorkIdTrackingCancelEndPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdTrackingCancelEndPost"],
    mutationFn: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingCancelEndPostRequest) => worksWorkIdTrackingCancelEndMutate.worksWorkIdTrackingCancelEndPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
