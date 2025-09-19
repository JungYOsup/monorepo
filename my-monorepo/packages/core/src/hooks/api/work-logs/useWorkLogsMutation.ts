import { workLogsMutate } from "@core/api/work-logs/workLogsQuery";
import { DefaultApiWorkLogsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkLogsWorkLogsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorkLogsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsPost"],
    mutationFn: (params: DefaultApiWorkLogsPostRequest) => workLogsMutate.workLogsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
