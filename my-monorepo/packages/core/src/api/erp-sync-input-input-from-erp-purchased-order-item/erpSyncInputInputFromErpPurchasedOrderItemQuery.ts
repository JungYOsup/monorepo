import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import { AxiosResponse } from "axios";

export const ERPSYNCINPUTINPUTFROMERPPURCHASEDORDERITEM_QUERY_KEY = "ERPSYNCINPUTINPUTFROMERPPURCHASEDORDERITEM";

export const erpSyncInputInputFromErpPurchasedOrderItemMutate = createMutationKeys(ERPSYNCINPUTINPUTFROMERPPURCHASEDORDERITEM_QUERY_KEY, {
  erpSyncInputInputFromErpPurchasedOrderItemPost: () => {
    return {
      mutationKey: ["erpSyncInputInputFromErpPurchasedOrderItemPost"],
      mutationFn: () => DefaultInstance.erpSyncInputInputFromErpPurchasedOrderItemPost(),
    };
  },
});

export const erpSyncInputInputFromErpPurchasedOrderItemQueryKeys = erpSyncInputInputFromErpPurchasedOrderItemMutate;