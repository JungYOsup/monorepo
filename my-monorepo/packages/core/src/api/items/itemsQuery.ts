import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiItemsFindPostRequest,
  MasterApiItemsGetRequest,
  MasterApiItemsItemIdGetRequest,
  MasterApiItemsItemIdDeleteRequest,
  MasterApiItemsItemIdPutRequest,
  MasterApiItemsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMS_QUERY_KEY = "ITEMS";

export const items = createQueryKeys(ITEMS_QUERY_KEY, {
  itemsFindPost: (params: MasterApiItemsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemsFindPost(params),
    };
  },
  itemsGet: (params: MasterApiItemsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemsGet(params),
    };
  },
  itemsItemIdGet: (params: MasterApiItemsItemIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemsItemIdGet(params),
    };
  },
});

export const itemsMutate = createMutationKeys(ITEMS_QUERY_KEY, {
  itemsItemIdDelete: (params: MasterApiItemsItemIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemsItemIdDelete(params),
    };
  },
  itemsItemIdPut: (params: MasterApiItemsItemIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemsItemIdPut(params),
    };
  },
  itemsPost: (params: MasterApiItemsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemsPost(params),
    };
  },
});

export const itemsQueryKeys = mergeQueryKeys(items, itemsMutate);