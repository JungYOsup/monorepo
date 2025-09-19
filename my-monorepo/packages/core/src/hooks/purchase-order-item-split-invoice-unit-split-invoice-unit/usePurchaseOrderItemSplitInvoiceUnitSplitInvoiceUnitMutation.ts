import { purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitMutate } from "@core/api/purchase-order-item-split-invoice-unit-split-invoice-unit/purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitQuery";
import { ScmApiPurchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePurchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPurchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiPurchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPost"],
    mutationFn: (params: ScmApiPurchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPostRequest) => purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitMutate.purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
