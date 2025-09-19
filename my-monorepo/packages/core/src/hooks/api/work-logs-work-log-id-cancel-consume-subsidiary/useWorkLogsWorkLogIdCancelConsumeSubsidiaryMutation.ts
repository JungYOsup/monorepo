import { workLogsWorkLogIdCancelConsumeSubsidiaryMutate } from "@core/api/work-logs-work-log-id-cancel-consume-subsidiary/workLogsWorkLogIdCancelConsumeSubsidiaryQuery";
import { ProductionActionApiWorkLogsWorkLogIdCancelConsumeSubsidiaryPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogIdCancelConsumeSubsidiaryWorkLogsWorkLogIdCancelConsumeSubsidiaryPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsWorkLogIdCancelConsumeSubsidiaryPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdCancelConsumeSubsidiaryPut"],
    mutationFn: (params: ProductionActionApiWorkLogsWorkLogIdCancelConsumeSubsidiaryPutRequest) => workLogsWorkLogIdCancelConsumeSubsidiaryMutate.workLogsWorkLogIdCancelConsumeSubsidiaryPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
