import { purchaseOrderItemsWithItemGrade } from "@core/api/purchase-order-items-with-item-grade/purchaseOrderItemsWithItemGradeQuery";
import { ScmApiPurchaseOrderItemsWithItemGradeGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePurchaseOrderItemsWithItemGradePurchaseOrderItemsWithItemGradeGetQuery = (params: ScmApiPurchaseOrderItemsWithItemGradeGetRequest) => {
  return useQuery({
    ...purchaseOrderItemsWithItemGrade.purchaseOrderItemsWithItemGradeGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
