import { worksGroupTrackingForceEndMutate } from "@core/api/works-group-tracking-force-end/worksGroupTrackingForceEndQuery";
import { ProductionTimeTrackingActionApiWorksGroupTrackingForceEndPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksGroupTrackingForceEndWorksGroupTrackingForceEndPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionTimeTrackingActionApiWorksGroupTrackingForceEndPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksGroupTrackingForceEndPost"],
    mutationFn: (params: ProductionTimeTrackingActionApiWorksGroupTrackingForceEndPostRequest) => worksGroupTrackingForceEndMutate.worksGroupTrackingForceEndPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
