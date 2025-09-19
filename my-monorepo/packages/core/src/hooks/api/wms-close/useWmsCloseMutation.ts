import { wmsCloseMutate } from "@core/api/wms-close/wmsCloseQuery";
import { DefaultApiWmsClosePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsCloseWmsClosePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsClosePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsClosePost"],
    mutationFn: (params: DefaultApiWmsClosePostRequest) => wmsCloseMutate.wmsClosePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
