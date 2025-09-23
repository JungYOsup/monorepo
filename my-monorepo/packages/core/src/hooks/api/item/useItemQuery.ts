import { item } from "@core/api/item/itemQuery";
import { DefaultApiItemGradeViewItemIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemItemGradeViewItemIdGetQuery = (params: DefaultApiItemGradeViewItemIdGetRequest) => {
  return useQuery({
    ...item.itemGradeViewItemIdGet(params),
    retry: 1,
  });
};
