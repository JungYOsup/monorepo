import { menuLists } from "@core/api/menu-lists/menuListsQuery";
import { MasterApiMenuListsFindPostRequest, MasterApiMenuListsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMenuListsMenuListsFindPostQuery = (params: MasterApiMenuListsFindPostRequest) => {
  return useQuery({
    ...menuLists.menuListsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useMenuListsMenuListsGetQuery = (params: MasterApiMenuListsGetRequest) => {
  return useQuery({
    ...menuLists.menuListsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
