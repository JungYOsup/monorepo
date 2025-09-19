import { workLogsCheckDefectLotMutate } from "@core/api/work-logs-check-defect-lot/workLogsCheckDefectLotQuery";
import { ProductionActionApiWorkLogsCheckDefectLotPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsCheckDefectLotWorkLogsCheckDefectLotPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorkLogsCheckDefectLotPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsCheckDefectLotPost"],
    mutationFn: (params: ProductionActionApiWorkLogsCheckDefectLotPostRequest) => workLogsCheckDefectLotMutate.workLogsCheckDefectLotPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
