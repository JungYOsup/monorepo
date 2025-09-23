import { itemGradeView } from "@core/api/item-grade-view/itemGradeViewQuery";
import { DefaultApiItemGradeViewFindPostRequest, DefaultApiItemGradeViewGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemGradeViewItemGradeViewFindPostQuery = (params: DefaultApiItemGradeViewFindPostRequest) => {
  return useQuery({
    ...itemGradeView.itemGradeViewFindPost(params),
    enabled: !!params,
  });
};

export const useItemGradeViewItemGradeViewGetQuery = (params: DefaultApiItemGradeViewGetRequest) => {
  return useQuery({
    ...itemGradeView.itemGradeViewGet(params),
    retry: 1,
  });
};
