import { worksWorkIdAdjustPerformanceMutate } from "@core/api/works-work-id-adjust-performance/worksWorkIdAdjustPerformanceQuery";
import { ProductionActionApiWorksWorkIdAdjustPerformancePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdAdjustPerformanceWorksWorkIdAdjustPerformancePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdAdjustPerformancePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdAdjustPerformancePut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdAdjustPerformancePutRequest) => worksWorkIdAdjustPerformanceMutate.worksWorkIdAdjustPerformancePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
