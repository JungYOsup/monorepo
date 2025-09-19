import { moldStocksMutate } from "@core/api/mold-stocks/moldStocksQuery";
import { MasterApiMoldStocksPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useMoldStocksMoldStocksPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiMoldStocksPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["moldStocksPost"],
    mutationFn: (params: MasterApiMoldStocksPostRequest) => moldStocksMutate.moldStocksPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
