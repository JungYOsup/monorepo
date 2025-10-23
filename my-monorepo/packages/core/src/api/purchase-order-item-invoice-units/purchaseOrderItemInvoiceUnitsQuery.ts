import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderItemInvoiceUnitsFindPostRequest,
  ScmApiPurchaseOrderItemInvoiceUnitsGetRequest,
  ScmApiPurchaseOrderItemInvoiceUnitsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERITEMINVOICEUNITS_QUERY_KEY = "PURCHASEORDERITEMINVOICEUNITS";

export const purchaseOrderItemInvoiceUnits = createQueryKeys(PURCHASEORDERITEMINVOICEUNITS_QUERY_KEY, {
  purchaseOrderItemInvoiceUnitsFindPost: (params: ScmApiPurchaseOrderItemInvoiceUnitsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemInvoiceUnitsFindPost(params),
    };
  },
  purchaseOrderItemInvoiceUnitsGet: (params: ScmApiPurchaseOrderItemInvoiceUnitsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemInvoiceUnitsGet(params),
    };
  },
});

export const purchaseOrderItemInvoiceUnitsMutate = createMutationKeys(PURCHASEORDERITEMINVOICEUNITS_QUERY_KEY, {
  purchaseOrderItemInvoiceUnitsPost: (params: ScmApiPurchaseOrderItemInvoiceUnitsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ScmInstance.purchaseOrderItemInvoiceUnitsPost(params),
    };
  },
});

export const purchaseOrderItemInvoiceUnitsQueryKeys = mergeQueryKeys(purchaseOrderItemInvoiceUnits, purchaseOrderItemInvoiceUnitsMutate);