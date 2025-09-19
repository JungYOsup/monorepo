import { workLogsWorkLogIdCancelCorrectionMutate } from "@core/api/work-logs-work-log-id-cancel-correction/workLogsWorkLogIdCancelCorrectionQuery";
import { ProductionActionApiWorkLogsWorkLogIdCancelCorrectionPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogIdCancelCorrectionWorkLogsWorkLogIdCancelCorrectionPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsWorkLogIdCancelCorrectionPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdCancelCorrectionPut"],
    mutationFn: (params: ProductionActionApiWorkLogsWorkLogIdCancelCorrectionPutRequest) => workLogsWorkLogIdCancelCorrectionMutate.workLogsWorkLogIdCancelCorrectionPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
