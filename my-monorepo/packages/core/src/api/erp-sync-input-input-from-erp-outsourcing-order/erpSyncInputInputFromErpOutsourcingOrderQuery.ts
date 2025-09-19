import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import { AxiosResponse } from "axios";

export const ERPSYNCINPUTINPUTFROMERPOUTSOURCINGORDER_QUERY_KEY = "ERPSYNCINPUTINPUTFROMERPOUTSOURCINGORDER";

export const erpSyncInputInputFromErpOutsourcingOrderMutate = createMutationKeys(ERPSYNCINPUTINPUTFROMERPOUTSOURCINGORDER_QUERY_KEY, {
  erpSyncInputInputFromErpOutsourcingOrderPost: () => {
    return {
      mutationKey: ["erpSyncInputInputFromErpOutsourcingOrderPost"],
      mutationFn: () => DefaultInstance.erpSyncInputInputFromErpOutsourcingOrderPost(),
    };
  },
});

export const erpSyncInputInputFromErpOutsourcingOrderQueryKeys = erpSyncInputInputFromErpOutsourcingOrderMutate;