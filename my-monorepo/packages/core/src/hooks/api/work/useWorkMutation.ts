import { workMutate } from "@core/api/work/workQuery";
import { DefaultApiWorkLogsWorkLogIdDeleteRequest, DefaultApiWorkLogsWorkLogIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorkWorkLogsWorkLogIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorkLogsWorkLogIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdDelete"],
    mutationFn: (params: DefaultApiWorkLogsWorkLogIdDeleteRequest) => workMutate.workLogsWorkLogIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useWorkWorkLogsWorkLogIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorkLogsWorkLogIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["workLogsWorkLogIdPut"],
    mutationFn: (params: DefaultApiWorkLogsWorkLogIdPutRequest) => workMutate.workLogsWorkLogIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
