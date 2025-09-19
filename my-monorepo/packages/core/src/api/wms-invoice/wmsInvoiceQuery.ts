import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsInvoicePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSINVOICE_QUERY_KEY = "WMSINVOICE";

export const wmsInvoiceMutate = createMutationKeys(WMSINVOICE_QUERY_KEY, {
  wmsInvoicePost: (params: DefaultApiWmsInvoicePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsInvoicePost(params),
    };
  },
});

export const wmsInvoiceQueryKeys = wmsInvoiceMutate;