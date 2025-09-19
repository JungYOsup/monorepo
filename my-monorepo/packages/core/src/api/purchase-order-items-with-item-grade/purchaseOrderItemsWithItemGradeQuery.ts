import { ScmInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ScmApiPurchaseOrderItemsWithItemGradeGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PURCHASEORDERITEMSWITHITEMGRADE_QUERY_KEY = "PURCHASEORDERITEMSWITHITEMGRADE";

export const purchaseOrderItemsWithItemGrade = createQueryKeys(PURCHASEORDERITEMSWITHITEMGRADE_QUERY_KEY, {
  purchaseOrderItemsWithItemGradeGet: (params: ScmApiPurchaseOrderItemsWithItemGradeGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ScmInstance.purchaseOrderItemsWithItemGradeGet(params),
    };
  },
});

export const purchaseOrderItemsWithItemGradeQueryKeys = purchaseOrderItemsWithItemGrade;