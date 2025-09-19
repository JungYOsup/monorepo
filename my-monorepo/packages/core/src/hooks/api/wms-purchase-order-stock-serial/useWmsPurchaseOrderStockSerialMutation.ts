import { wmsPurchaseOrderStockSerialMutate } from "@core/api/wms-purchase-order-stock-serial/wmsPurchaseOrderStockSerialQuery";
import { DefaultApiWmsPurchaseOrderStockSerialPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsPurchaseOrderStockSerialWmsPurchaseOrderStockSerialPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsPurchaseOrderStockSerialPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsPurchaseOrderStockSerialPost"],
    mutationFn: (params: DefaultApiWmsPurchaseOrderStockSerialPostRequest) => wmsPurchaseOrderStockSerialMutate.wmsPurchaseOrderStockSerialPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
