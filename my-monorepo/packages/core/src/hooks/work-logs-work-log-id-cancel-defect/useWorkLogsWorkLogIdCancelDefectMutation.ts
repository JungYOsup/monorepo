import { workLogsWorkLogIdCancelDefectMutate } from "@core/api/work-logs-work-log-id-cancel-defect/workLogsWorkLogIdCancelDefectQuery";
import { ProductionActionApiWorkLogsWorkLogIdCancelDefectPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogIdCancelDefectWorkLogsWorkLogIdCancelDefectPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsWorkLogIdCancelDefectPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdCancelDefectPut"],
    mutationFn: (params: ProductionActionApiWorkLogsWorkLogIdCancelDefectPutRequest) => workLogsWorkLogIdCancelDefectMutate.workLogsWorkLogIdCancelDefectPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
