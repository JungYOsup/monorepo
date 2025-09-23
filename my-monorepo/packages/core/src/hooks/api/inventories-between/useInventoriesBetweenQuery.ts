import { inventoriesBetween } from "@core/api/inventories-between/inventoriesBetweenQuery";
import { DefaultApiInventoriesBetweenFindPostRequest, DefaultApiInventoriesBetweenGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useInventoriesBetweenInventoriesBetweenFindPostQuery = (params: DefaultApiInventoriesBetweenFindPostRequest) => {
  return useQuery({
    ...inventoriesBetween.inventoriesBetweenFindPost(params),
    enabled: !!params,
  });
};

export const useInventoriesBetweenInventoriesBetweenGetQuery = (params: DefaultApiInventoriesBetweenGetRequest) => {
  return useQuery({
    ...inventoriesBetween.inventoriesBetweenGet(params),
    retry: 1,
  });
};
