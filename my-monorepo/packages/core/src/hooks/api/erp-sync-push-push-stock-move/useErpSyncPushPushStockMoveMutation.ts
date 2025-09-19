import { erpSyncPushPushStockMoveMutate } from "@core/api/erp-sync-push-push-stock-move/erpSyncPushPushStockMoveQuery";
import { DefaultApiErpSyncPushPushStockMovePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushPushStockMoveErpSyncPushPushStockMovePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushPushStockMovePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushPushStockMovePost"],
    mutationFn: (params: DefaultApiErpSyncPushPushStockMovePostRequest) => erpSyncPushPushStockMoveMutate.erpSyncPushPushStockMovePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
