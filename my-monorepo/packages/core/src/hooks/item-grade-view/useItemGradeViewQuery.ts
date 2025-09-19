import { itemGradeView } from "@core/api/item-grade-view/itemGradeViewQuery";
import { DefaultApiItemGradeViewFindPostRequest, DefaultApiItemGradeViewGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemGradeViewItemGradeViewFindPostQuery = (params: DefaultApiItemGradeViewFindPostRequest) => {
  return useQuery({
    ...itemGradeView.itemGradeViewFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useItemGradeViewItemGradeViewGetQuery = (params: DefaultApiItemGradeViewGetRequest) => {
  return useQuery({
    ...itemGradeView.itemGradeViewGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
