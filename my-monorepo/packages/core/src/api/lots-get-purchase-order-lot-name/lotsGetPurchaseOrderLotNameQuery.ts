import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiLotsGetPurchaseOrderLotNamePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const LOTSGETPURCHASEORDERLOTNAME_QUERY_KEY = "LOTSGETPURCHASEORDERLOTNAME";

export const lotsGetPurchaseOrderLotNameMutate = createMutationKeys(LOTSGETPURCHASEORDERLOTNAME_QUERY_KEY, {
  lotsGetPurchaseOrderLotNamePost: (params: DefaultApiLotsGetPurchaseOrderLotNamePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.lotsGetPurchaseOrderLotNamePost(params),
    };
  },
});

export const lotsGetPurchaseOrderLotNameQueryKeys = lotsGetPurchaseOrderLotNameMutate;