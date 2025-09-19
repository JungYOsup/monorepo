import { workLogsWorkLogIdCancelPerformanceMutate } from "@core/api/work-logs-work-log-id-cancel-performance/workLogsWorkLogIdCancelPerformanceQuery";
import { ProductionActionApiWorkLogsWorkLogIdCancelPerformancePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogIdCancelPerformanceWorkLogsWorkLogIdCancelPerformancePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsWorkLogIdCancelPerformancePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdCancelPerformancePut"],
    mutationFn: (params: ProductionActionApiWorkLogsWorkLogIdCancelPerformancePutRequest) => workLogsWorkLogIdCancelPerformanceMutate.workLogsWorkLogIdCancelPerformancePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
