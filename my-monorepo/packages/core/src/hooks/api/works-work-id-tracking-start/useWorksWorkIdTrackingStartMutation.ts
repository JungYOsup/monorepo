import { worksWorkIdTrackingStartMutate } from "@core/api/works-work-id-tracking-start/worksWorkIdTrackingStartQuery";
import { ProductionTimeTrackingActionApiWorksWorkIdTrackingStartPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdTrackingStartWorksWorkIdTrackingStartPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionTimeTrackingActionApiWorksWorkIdTrackingStartPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdTrackingStartPost"],
    mutationFn: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingStartPostRequest) => worksWorkIdTrackingStartMutate.worksWorkIdTrackingStartPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
