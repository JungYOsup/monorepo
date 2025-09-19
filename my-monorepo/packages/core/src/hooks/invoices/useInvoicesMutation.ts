import { invoicesMutate } from "@core/api/invoices/invoicesQuery";
import { ScmApiInvoicesInvoiceIdDeleteRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInvoicesInvoicesInvoiceIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ScmApiInvoicesInvoiceIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["invoicesInvoiceIdDelete"],
    mutationFn: (params: ScmApiInvoicesInvoiceIdDeleteRequest) => invoicesMutate.invoicesInvoiceIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
