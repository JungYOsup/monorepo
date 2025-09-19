import { wmsLogsMutate } from "@core/api/wms-logs/wmsLogsQuery";
import { DefaultApiWmsLogsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsLogsWmsLogsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsLogsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsLogsPost"],
    mutationFn: (params: DefaultApiWmsLogsPostRequest) => wmsLogsMutate.wmsLogsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
