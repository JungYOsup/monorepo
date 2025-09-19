import { worksItemSlittingInvoicesMutate } from "@core/api/works-item-slitting-invoices/worksItemSlittingInvoicesQuery";
import { DefaultApiWorksItemSlittingInvoicesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksItemSlittingInvoicesWorksItemSlittingInvoicesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorksItemSlittingInvoicesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksItemSlittingInvoicesPost"],
    mutationFn: (params: DefaultApiWorksItemSlittingInvoicesPostRequest) => worksItemSlittingInvoicesMutate.worksItemSlittingInvoicesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
