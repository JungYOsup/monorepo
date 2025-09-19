import { wmsTransferMutate } from "@core/api/wms-transfer/wmsTransferQuery";
import { DefaultApiWmsTransferPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsTransferWmsTransferPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsTransferPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsTransferPost"],
    mutationFn: (params: DefaultApiWmsTransferPostRequest) => wmsTransferMutate.wmsTransferPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
