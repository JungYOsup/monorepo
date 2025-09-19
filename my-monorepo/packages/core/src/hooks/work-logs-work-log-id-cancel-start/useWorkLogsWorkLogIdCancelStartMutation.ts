import { workLogsWorkLogIdCancelStartMutate } from "@core/api/work-logs-work-log-id-cancel-start/workLogsWorkLogIdCancelStartQuery";
import { ProductionActionApiWorkLogsWorkLogIdCancelStartPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogIdCancelStartWorkLogsWorkLogIdCancelStartPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsWorkLogIdCancelStartPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdCancelStartPut"],
    mutationFn: (params: ProductionActionApiWorkLogsWorkLogIdCancelStartPutRequest) => workLogsWorkLogIdCancelStartMutate.workLogsWorkLogIdCancelStartPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
