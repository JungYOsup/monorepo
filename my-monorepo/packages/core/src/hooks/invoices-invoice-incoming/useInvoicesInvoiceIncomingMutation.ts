import { invoicesInvoiceIncomingMutate } from "@core/api/invoices-invoice-incoming/invoicesInvoiceIncomingQuery";
import { ScmApiInvoicesInvoiceIncomingPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInvoicesInvoiceIncomingInvoicesInvoiceIncomingPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiInvoicesInvoiceIncomingPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["invoicesInvoiceIncomingPost"],
    mutationFn: (params: ScmApiInvoicesInvoiceIncomingPostRequest) => invoicesInvoiceIncomingMutate.invoicesInvoiceIncomingPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
