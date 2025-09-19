import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWipInventoriesGetRequest,
  DefaultApiWipInventoriesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WIPINVENTORIES_QUERY_KEY = "WIPINVENTORIES";

export const wipInventories = createQueryKeys(WIPINVENTORIES_QUERY_KEY, {
  wipInventoriesGet: (params: DefaultApiWipInventoriesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.wipInventoriesGet(params),
    };
  },
});

export const wipInventoriesMutate = createMutationKeys(WIPINVENTORIES_QUERY_KEY, {
  wipInventoriesPost: (params: DefaultApiWipInventoriesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wipInventoriesPost(params),
    };
  },
});

export const wipInventoriesQueryKeys = mergeQueryKeys(wipInventories, wipInventoriesMutate);