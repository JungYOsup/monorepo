import { wmsFlushMutate } from "@core/api/wms-flush/wmsFlushQuery";
import { DefaultApiWmsFlushPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsFlushWmsFlushPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsFlushPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsFlushPut"],
    mutationFn: (params: DefaultApiWmsFlushPutRequest) => wmsFlushMutate.wmsFlushPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
