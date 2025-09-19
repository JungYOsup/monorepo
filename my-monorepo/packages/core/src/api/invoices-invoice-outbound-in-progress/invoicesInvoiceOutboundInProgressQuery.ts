import { ScmInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiInvoicesInvoiceOutboundInProgressPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INVOICESINVOICEOUTBOUNDINPROGRESS_QUERY_KEY = "INVOICESINVOICEOUTBOUNDINPROGRESS";

export const invoicesInvoiceOutboundInProgressMutate = createMutationKeys(INVOICESINVOICEOUTBOUNDINPROGRESS_QUERY_KEY, {
  invoicesInvoiceOutboundInProgressPost: (params: ScmApiInvoicesInvoiceOutboundInProgressPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.invoicesInvoiceOutboundInProgressPost(params),
    };
  },
});

export const invoicesInvoiceOutboundInProgressQueryKeys = invoicesInvoiceOutboundInProgressMutate;