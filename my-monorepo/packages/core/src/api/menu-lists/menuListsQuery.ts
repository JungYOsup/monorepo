import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiMenuListsFindPostRequest,
  MasterApiMenuListsGetRequest,
  MasterApiMenuListsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const MENULISTS_QUERY_KEY = "MENULISTS";

export const menuLists = createQueryKeys(MENULISTS_QUERY_KEY, {
  menuListsFindPost: (params: MasterApiMenuListsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.menuListsFindPost(params),
    };
  },
  menuListsGet: (params: MasterApiMenuListsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.menuListsGet(params),
    };
  },
});

export const menuListsMutate = createMutationKeys(MENULISTS_QUERY_KEY, {
  menuListsPost: (params: MasterApiMenuListsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.menuListsPost(params),
    };
  },
});

export const menuListsQueryKeys = mergeQueryKeys(menuLists, menuListsMutate);