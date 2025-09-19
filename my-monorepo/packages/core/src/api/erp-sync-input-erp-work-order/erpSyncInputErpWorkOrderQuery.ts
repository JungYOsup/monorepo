import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import { AxiosResponse } from "axios";

export const ERPSYNCINPUTERPWORKORDER_QUERY_KEY = "ERPSYNCINPUTERPWORKORDER";

export const erpSyncInputErpWorkOrderMutate = createMutationKeys(ERPSYNCINPUTERPWORKORDER_QUERY_KEY, {
  erpSyncInputErpWorkOrderPost: () => {
    return {
      mutationKey: ["erpSyncInputErpWorkOrderPost"],
      mutationFn: () => DefaultInstance.erpSyncInputErpWorkOrderPost(),
    };
  },
});

export const erpSyncInputErpWorkOrderQueryKeys = erpSyncInputErpWorkOrderMutate;