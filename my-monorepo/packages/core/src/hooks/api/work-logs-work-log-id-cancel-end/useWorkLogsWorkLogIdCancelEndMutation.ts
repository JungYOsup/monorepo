import { workLogsWorkLogIdCancelEndMutate } from "@core/api/work-logs-work-log-id-cancel-end/workLogsWorkLogIdCancelEndQuery";
import { ProductionActionApiWorkLogsWorkLogIdCancelEndPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogIdCancelEndWorkLogsWorkLogIdCancelEndPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsWorkLogIdCancelEndPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdCancelEndPut"],
    mutationFn: (params: ProductionActionApiWorkLogsWorkLogIdCancelEndPutRequest) => workLogsWorkLogIdCancelEndMutate.workLogsWorkLogIdCancelEndPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
