import { lotsGetPurchaseOrderLotNameMutate } from "@core/api/lots-get-purchase-order-lot-name/lotsGetPurchaseOrderLotNameQuery";
import { DefaultApiLotsGetPurchaseOrderLotNamePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLotsGetPurchaseOrderLotNameLotsGetPurchaseOrderLotNamePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLotsGetPurchaseOrderLotNamePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["lotsGetPurchaseOrderLotNamePost"],
    mutationFn: (params: DefaultApiLotsGetPurchaseOrderLotNamePostRequest) => lotsGetPurchaseOrderLotNameMutate.lotsGetPurchaseOrderLotNamePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
