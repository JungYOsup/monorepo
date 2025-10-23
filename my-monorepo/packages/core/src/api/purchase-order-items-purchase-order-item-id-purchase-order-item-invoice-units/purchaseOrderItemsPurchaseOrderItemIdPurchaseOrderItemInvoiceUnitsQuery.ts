import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderItemsPurchaseOrderItemIdPurchaseOrderItemInvoiceUnitsGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERITEMSPURCHASEORDERITEMIDPURCHASEORDERITEMINVOICEUNITS_QUERY_KEY = "PURCHASEORDERITEMSPURCHASEORDERITEMIDPURCHASEORDERITEMINVOICEUNITS";

export const purchaseOrderItemsPurchaseOrderItemIdPurchaseOrderItemInvoiceUnits = createQueryKeys(PURCHASEORDERITEMSPURCHASEORDERITEMIDPURCHASEORDERITEMINVOICEUNITS_QUERY_KEY, {
  purchaseOrderItemsPurchaseOrderItemIdPurchaseOrderItemInvoiceUnitsGet: (params: ScmApiPurchaseOrderItemsPurchaseOrderItemIdPurchaseOrderItemInvoiceUnitsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemsPurchaseOrderItemIdPurchaseOrderItemInvoiceUnitsGet(params),
    };
  },
});

export const purchaseOrderItemsPurchaseOrderItemIdPurchaseOrderItemInvoiceUnitsQueryKeys = purchaseOrderItemsPurchaseOrderItemIdPurchaseOrderItemInvoiceUnits;