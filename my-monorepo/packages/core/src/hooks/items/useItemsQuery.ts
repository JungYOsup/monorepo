import { items } from "@core/api/items/itemsQuery";
import { MasterApiItemsFindPostRequest, MasterApiItemsGetRequest, MasterApiItemsItemIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemsItemsFindPostQuery = (params: MasterApiItemsFindPostRequest) => {
  return useQuery({
    ...items.itemsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useItemsItemsGetQuery = (params: MasterApiItemsGetRequest) => {
  return useQuery({
    ...items.itemsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useItemsItemsItemIdGetQuery = (params: MasterApiItemsItemIdGetRequest) => {
  return useQuery({
    ...items.itemsItemIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
