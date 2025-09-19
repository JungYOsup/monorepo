import { ScmInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERITEMSPLITINVOICEUNITSPLITINVOICEUNIT_QUERY_KEY = "PURCHASEORDERITEMSPLITINVOICEUNITSPLITINVOICEUNIT";

export const purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitMutate = createMutationKeys(PURCHASEORDERITEMSPLITINVOICEUNITSPLITINVOICEUNIT_QUERY_KEY, {
  purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPost: (params: ScmApiPurchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitPost(params),
    };
  },
});

export const purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitQueryKeys = purchaseOrderItemSplitInvoiceUnitSplitInvoiceUnitMutate;