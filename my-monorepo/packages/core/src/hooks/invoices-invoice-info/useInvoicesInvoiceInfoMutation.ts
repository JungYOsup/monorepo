import { invoicesInvoiceInfoMutate } from "@core/api/invoices-invoice-info/invoicesInvoiceInfoQuery";
import { ScmApiInvoicesInvoiceInfoPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInvoicesInvoiceInfoInvoicesInvoiceInfoPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiInvoicesInvoiceInfoPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["invoicesInvoiceInfoPost"],
    mutationFn: (params: ScmApiInvoicesInvoiceInfoPostRequest) => invoicesInvoiceInfoMutate.invoicesInvoiceInfoPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
