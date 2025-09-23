import { itemCategories } from "@core/api/item-categories/itemCategoriesQuery";
import { MasterApiItemCategoriesFindPostRequest, MasterApiItemCategoriesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemCategoriesItemCategoriesFindPostQuery = (params: MasterApiItemCategoriesFindPostRequest) => {
  return useQuery({
    ...itemCategories.itemCategoriesFindPost(params),
    enabled: !!params,
  });
};

export const useItemCategoriesItemCategoriesGetQuery = (params: MasterApiItemCategoriesGetRequest) => {
  return useQuery({
    ...itemCategories.itemCategoriesGet(params),
    retry: 1,
  });
};
