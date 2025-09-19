import { worksWorkIdPerformanceMutate } from "@core/api/works-work-id-performance/worksWorkIdPerformanceQuery";
import { ProductionActionApiWorksWorkIdPerformancePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdPerformanceWorksWorkIdPerformancePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdPerformancePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdPerformancePut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdPerformancePutRequest) => worksWorkIdPerformanceMutate.worksWorkIdPerformancePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
