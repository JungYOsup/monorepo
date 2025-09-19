import { workLogsWorkLogIdCancelInputMutate } from "@core/api/work-logs-work-log-id-cancel-input/workLogsWorkLogIdCancelInputQuery";
import { ProductionActionApiWorkLogsWorkLogIdCancelInputPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogIdCancelInputWorkLogsWorkLogIdCancelInputPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsWorkLogIdCancelInputPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdCancelInputPut"],
    mutationFn: (params: ProductionActionApiWorkLogsWorkLogIdCancelInputPutRequest) => workLogsWorkLogIdCancelInputMutate.workLogsWorkLogIdCancelInputPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
