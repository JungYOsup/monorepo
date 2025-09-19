import { ScmInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiInvoicesInvoiceIncomingPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INVOICESINVOICEINCOMING_QUERY_KEY = "INVOICESINVOICEINCOMING";

export const invoicesInvoiceIncomingMutate = createMutationKeys(INVOICESINVOICEINCOMING_QUERY_KEY, {
  invoicesInvoiceIncomingPost: (params: ScmApiInvoicesInvoiceIncomingPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.invoicesInvoiceIncomingPost(params),
    };
  },
});

export const invoicesInvoiceIncomingQueryKeys = invoicesInvoiceIncomingMutate;