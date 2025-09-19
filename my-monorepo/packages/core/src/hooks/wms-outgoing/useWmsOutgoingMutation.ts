import { wmsOutgoingMutate } from "@core/api/wms-outgoing/wmsOutgoingQuery";
import { DefaultApiWmsOutgoingPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsOutgoingWmsOutgoingPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsOutgoingPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsOutgoingPost"],
    mutationFn: (params: DefaultApiWmsOutgoingPostRequest) => wmsOutgoingMutate.wmsOutgoingPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
