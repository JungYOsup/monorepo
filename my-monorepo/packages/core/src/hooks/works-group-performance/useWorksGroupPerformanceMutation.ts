import { worksGroupPerformanceMutate } from "@core/api/works-group-performance/worksGroupPerformanceQuery";
import { ProductionActionApiWorksGroupPerformancePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksGroupPerformanceWorksGroupPerformancePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksGroupPerformancePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksGroupPerformancePut"],
    mutationFn: (params: ProductionActionApiWorksGroupPerformancePutRequest) => worksGroupPerformanceMutate.worksGroupPerformancePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
