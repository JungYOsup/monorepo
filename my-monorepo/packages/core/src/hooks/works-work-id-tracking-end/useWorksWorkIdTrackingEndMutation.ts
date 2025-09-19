import { worksWorkIdTrackingEndMutate } from "@core/api/works-work-id-tracking-end/worksWorkIdTrackingEndQuery";
import { ProductionTimeTrackingActionApiWorksWorkIdTrackingEndPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdTrackingEndWorksWorkIdTrackingEndPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionTimeTrackingActionApiWorksWorkIdTrackingEndPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdTrackingEndPost"],
    mutationFn: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingEndPostRequest) => worksWorkIdTrackingEndMutate.worksWorkIdTrackingEndPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
