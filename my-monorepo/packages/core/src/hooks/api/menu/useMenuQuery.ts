import { menu } from "@core/api/menu/menuQuery";
import { MasterApiMenuListsMenuListIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMenuMenuListsMenuListIdGetQuery = (params: MasterApiMenuListsMenuListIdGetRequest) => {
  return useQuery({
    ...menu.menuListsMenuListIdGet(params),
    retry: 1,
  });
};
