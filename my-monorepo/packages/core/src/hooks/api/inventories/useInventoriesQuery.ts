import { inventories } from "@core/api/inventories/inventoriesQuery";
import { DefaultApiInventoriesFindPostRequest, DefaultApiInventoriesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useInventoriesInventoriesFindPostQuery = (params: DefaultApiInventoriesFindPostRequest) => {
  return useQuery({
    ...inventories.inventoriesFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useInventoriesInventoriesGetQuery = (params: DefaultApiInventoriesGetRequest) => {
  return useQuery({
    ...inventories.inventoriesGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
