import { wmsDirectPurchaseOrderStockSerialMutate } from "@core/api/wms-direct-purchase-order-stock-serial/wmsDirectPurchaseOrderStockSerialQuery";
import { DefaultApiWmsDirectPurchaseOrderStockSerialPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsDirectPurchaseOrderStockSerialWmsDirectPurchaseOrderStockSerialPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsDirectPurchaseOrderStockSerialPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsDirectPurchaseOrderStockSerialPost"],
    mutationFn: (params: DefaultApiWmsDirectPurchaseOrderStockSerialPostRequest) => wmsDirectPurchaseOrderStockSerialMutate.wmsDirectPurchaseOrderStockSerialPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
