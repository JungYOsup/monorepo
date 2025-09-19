import { ScmInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiInvoicesInvoiceInfoPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INVOICESINVOICEINFO_QUERY_KEY = "INVOICESINVOICEINFO";

export const invoicesInvoiceInfoMutate = createMutationKeys(INVOICESINVOICEINFO_QUERY_KEY, {
  invoicesInvoiceInfoPost: (params: ScmApiInvoicesInvoiceInfoPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.invoicesInvoiceInfoPost(params),
    };
  },
});

export const invoicesInvoiceInfoQueryKeys = invoicesInvoiceInfoMutate;