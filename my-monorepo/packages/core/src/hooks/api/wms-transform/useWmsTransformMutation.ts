import { wmsTransformMutate } from "@core/api/wms-transform/wmsTransformQuery";
import { DefaultApiWmsTransformPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsTransformWmsTransformPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsTransformPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsTransformPost"],
    mutationFn: (params: DefaultApiWmsTransformPostRequest) => wmsTransformMutate.wmsTransformPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
