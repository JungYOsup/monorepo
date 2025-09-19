import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsBulkInvoicePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSBULKINVOICE_QUERY_KEY = "WMSBULKINVOICE";

export const wmsBulkInvoiceMutate = createMutationKeys(WMSBULKINVOICE_QUERY_KEY, {
  wmsBulkInvoicePost: (params: DefaultApiWmsBulkInvoicePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsBulkInvoicePost(params),
    };
  },
});

export const wmsBulkInvoiceQueryKeys = wmsBulkInvoiceMutate;