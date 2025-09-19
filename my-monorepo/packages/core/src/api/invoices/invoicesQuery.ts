import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiInvoicesFindPostRequest,
  ScmApiInvoicesGetRequest,
  ScmApiInvoicesInvoiceIdGetRequest,
  ScmApiInvoicesInvoiceIdDeleteRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INVOICES_QUERY_KEY = "INVOICES";

export const invoices = createQueryKeys(INVOICES_QUERY_KEY, {
  invoicesFindPost: (params: ScmApiInvoicesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.invoicesFindPost(params),
    };
  },
  invoicesGet: (params: ScmApiInvoicesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.invoicesGet(params),
    };
  },
  invoicesInvoiceIdGet: (params: ScmApiInvoicesInvoiceIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.invoicesInvoiceIdGet(params),
    };
  },
});

export const invoicesMutate = createMutationKeys(INVOICES_QUERY_KEY, {
  invoicesInvoiceIdDelete: (params: ScmApiInvoicesInvoiceIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.invoicesInvoiceIdDelete(params),
    };
  },
});

export const invoicesQueryKeys = mergeQueryKeys(invoices, invoicesMutate);