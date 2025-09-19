import { worksWorkIdTrackingResumeMutate } from "@core/api/works-work-id-tracking-resume/worksWorkIdTrackingResumeQuery";
import { ProductionTimeTrackingActionApiWorksWorkIdTrackingResumePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdTrackingResumeWorksWorkIdTrackingResumePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionTimeTrackingActionApiWorksWorkIdTrackingResumePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdTrackingResumePost"],
    mutationFn: (params: ProductionTimeTrackingActionApiWorksWorkIdTrackingResumePostRequest) => worksWorkIdTrackingResumeMutate.worksWorkIdTrackingResumePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
