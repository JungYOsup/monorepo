import { invoices } from "@core/api/invoices/invoicesQuery";
import { ScmApiInvoicesFindPostRequest, ScmApiInvoicesGetRequest, ScmApiInvoicesInvoiceIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useInvoicesInvoicesFindPostQuery = (params: ScmApiInvoicesFindPostRequest) => {
  return useQuery({
    ...invoices.invoicesFindPost(params),
    enabled: !!params,
  });
};

export const useInvoicesInvoicesGetQuery = (params: ScmApiInvoicesGetRequest) => {
  return useQuery({
    ...invoices.invoicesGet(params),
    retry: 1,
  });
};

export const useInvoicesInvoicesInvoiceIdGetQuery = (params: ScmApiInvoicesInvoiceIdGetRequest) => {
  return useQuery({
    ...invoices.invoicesInvoiceIdGet(params),
    retry: 1,
  });
};
