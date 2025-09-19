import { invoicesInvoiceOutboundInProgressMutate } from "@core/api/invoices-invoice-outbound-in-progress/invoicesInvoiceOutboundInProgressQuery";
import { ScmApiInvoicesInvoiceOutboundInProgressPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInvoicesInvoiceOutboundInProgressInvoicesInvoiceOutboundInProgressPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiInvoicesInvoiceOutboundInProgressPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["invoicesInvoiceOutboundInProgressPost"],
    mutationFn: (params: ScmApiInvoicesInvoiceOutboundInProgressPostRequest) => invoicesInvoiceOutboundInProgressMutate.invoicesInvoiceOutboundInProgressPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
