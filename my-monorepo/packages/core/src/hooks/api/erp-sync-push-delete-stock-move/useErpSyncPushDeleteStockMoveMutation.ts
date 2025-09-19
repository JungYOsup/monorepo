import { erpSyncPushDeleteStockMoveMutate } from "@core/api/erp-sync-push-delete-stock-move/erpSyncPushDeleteStockMoveQuery";
import { DefaultApiErpSyncPushDeleteStockMovePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useErpSyncPushDeleteStockMoveErpSyncPushDeleteStockMovePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiErpSyncPushDeleteStockMovePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["erpSyncPushDeleteStockMovePost"],
    mutationFn: (params: DefaultApiErpSyncPushDeleteStockMovePostRequest) => erpSyncPushDeleteStockMoveMutate.erpSyncPushDeleteStockMovePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
