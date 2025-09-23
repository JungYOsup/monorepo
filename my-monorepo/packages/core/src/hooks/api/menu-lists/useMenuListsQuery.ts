import { menuLists } from "@core/api/menu-lists/menuListsQuery";
import { MasterApiMenuListsFindPostRequest, MasterApiMenuListsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMenuListsMenuListsFindPostQuery = (params: MasterApiMenuListsFindPostRequest) => {
  return useQuery({
    ...menuLists.menuListsFindPost(params),
    enabled: !!params,
  });
};

export const useMenuListsMenuListsGetQuery = (params: MasterApiMenuListsGetRequest) => {
  return useQuery({
    ...menuLists.menuListsGet(params),
    retry: 1,
  });
};
