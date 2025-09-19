import { wmsBulkInvoiceMutate } from "@core/api/wms-bulk-invoice/wmsBulkInvoiceQuery";
import { DefaultApiWmsBulkInvoicePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsBulkInvoiceWmsBulkInvoicePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsBulkInvoicePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsBulkInvoicePost"],
    mutationFn: (params: DefaultApiWmsBulkInvoicePostRequest) => wmsBulkInvoiceMutate.wmsBulkInvoicePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
