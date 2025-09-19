import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiItemChangesFindPostRequest,
  MasterApiItemChangesGetRequest,
  MasterApiItemChangesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMCHANGES_QUERY_KEY = "ITEMCHANGES";

export const itemChanges = createQueryKeys(ITEMCHANGES_QUERY_KEY, {
  itemChangesFindPost: (params: MasterApiItemChangesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemChangesFindPost(params),
    };
  },
  itemChangesGet: (params: MasterApiItemChangesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemChangesGet(params),
    };
  },
});

export const itemChangesMutate = createMutationKeys(ITEMCHANGES_QUERY_KEY, {
  itemChangesPost: (params: MasterApiItemChangesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemChangesPost(params),
    };
  },
});

export const itemChangesQueryKeys = mergeQueryKeys(itemChanges, itemChangesMutate);