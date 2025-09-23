import { wip } from "@core/api/wip/wipQuery";
import { DefaultApiWipInventoriesWipInventoryIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWipWipInventoriesWipInventoryIdGetQuery = (params: DefaultApiWipInventoriesWipInventoryIdGetRequest) => {
  return useQuery({
    ...wip.wipInventoriesWipInventoryIdGet(params),
    retry: 1,
  });
};
