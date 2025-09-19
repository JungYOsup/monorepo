import { wmsStockSerialMutate } from "@core/api/wms-stock-serial/wmsStockSerialQuery";
import { DefaultApiWmsStockSerialPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsStockSerialWmsStockSerialPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsStockSerialPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsStockSerialPost"],
    mutationFn: (params: DefaultApiWmsStockSerialPostRequest) => wmsStockSerialMutate.wmsStockSerialPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
