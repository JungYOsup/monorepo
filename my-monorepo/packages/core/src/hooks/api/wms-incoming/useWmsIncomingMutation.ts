import { wmsIncomingMutate } from "@core/api/wms-incoming/wmsIncomingQuery";
import { DefaultApiWmsIncomingPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsIncomingWmsIncomingPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsIncomingPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsIncomingPost"],
    mutationFn: (params: DefaultApiWmsIncomingPostRequest) => wmsIncomingMutate.wmsIncomingPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
