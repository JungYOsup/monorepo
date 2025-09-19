import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiMenuListsMenuListIdGetRequest,
  MasterApiMenuListsMenuListIdDeleteRequest,
  MasterApiMenuListsMenuListIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const MENU_QUERY_KEY = "MENU";

export const menu = createQueryKeys(MENU_QUERY_KEY, {
  menuListsMenuListIdGet: (params: MasterApiMenuListsMenuListIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.menuListsMenuListIdGet(params),
    };
  },
});

export const menuMutate = createMutationKeys(MENU_QUERY_KEY, {
  menuListsMenuListIdDelete: (params: MasterApiMenuListsMenuListIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.menuListsMenuListIdDelete(params),
    };
  },
  menuListsMenuListIdPut: (params: MasterApiMenuListsMenuListIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.menuListsMenuListIdPut(params),
    };
  },
});

export const menuQueryKeys = mergeQueryKeys(menu, menuMutate);