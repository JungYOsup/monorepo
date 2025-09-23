import { items } from "@core/api/items/itemsQuery";
import { MasterApiItemsFindPostRequest, MasterApiItemsGetRequest, MasterApiItemsItemIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemsItemsFindPostQuery = (params: MasterApiItemsFindPostRequest) => {
  return useQuery({
    ...items.itemsFindPost(params),
    enabled: !!params,
  });
};

export const useItemsItemsGetQuery = (params: MasterApiItemsGetRequest) => {
  return useQuery({
    ...items.itemsGet(params),
    retry: 1,
  });
};

export const useItemsItemsItemIdGetQuery = (params: MasterApiItemsItemIdGetRequest) => {
  return useQuery({
    ...items.itemsItemIdGet(params),
    retry: 1,
  });
};
