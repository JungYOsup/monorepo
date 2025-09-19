import { wipInventories } from "@core/api/wip-inventories/wipInventoriesQuery";
import { DefaultApiWipInventoriesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWipInventoriesWipInventoriesGetQuery = (params: DefaultApiWipInventoriesGetRequest) => {
  return useQuery({
    ...wipInventories.wipInventoriesGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
