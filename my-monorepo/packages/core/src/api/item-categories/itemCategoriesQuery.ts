import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiItemCategoriesFindPostRequest,
  MasterApiItemCategoriesGetRequest,
  MasterApiItemCategoriesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMCATEGORIES_QUERY_KEY = "ITEMCATEGORIES";

export const itemCategories = createQueryKeys(ITEMCATEGORIES_QUERY_KEY, {
  itemCategoriesFindPost: (params: MasterApiItemCategoriesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemCategoriesFindPost(params),
    };
  },
  itemCategoriesGet: (params: MasterApiItemCategoriesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemCategoriesGet(params),
    };
  },
});

export const itemCategoriesMutate = createMutationKeys(ITEMCATEGORIES_QUERY_KEY, {
  itemCategoriesPost: (params: MasterApiItemCategoriesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemCategoriesPost(params),
    };
  },
});

export const itemCategoriesQueryKeys = mergeQueryKeys(itemCategories, itemCategoriesMutate);