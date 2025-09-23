import { inventories } from "@core/api/inventories/inventoriesQuery";
import { DefaultApiInventoriesFindPostRequest, DefaultApiInventoriesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useInventoriesInventoriesFindPostQuery = (params: DefaultApiInventoriesFindPostRequest) => {
  return useQuery({
    ...inventories.inventoriesFindPost(params),
    enabled: !!params,
  });
};

export const useInventoriesInventoriesGetQuery = (params: DefaultApiInventoriesGetRequest) => {
  return useQuery({
    ...inventories.inventoriesGet(params),
    retry: 1,
  });
};
