import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorksItemSlittingInvoicesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSITEMSLITTINGINVOICES_QUERY_KEY = "WORKSITEMSLITTINGINVOICES";

export const worksItemSlittingInvoicesMutate = createMutationKeys(WORKSITEMSLITTINGINVOICES_QUERY_KEY, {
  worksItemSlittingInvoicesPost: (params: DefaultApiWorksItemSlittingInvoicesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.worksItemSlittingInvoicesPost(params),
    };
  },
});

export const worksItemSlittingInvoicesQueryKeys = worksItemSlittingInvoicesMutate;