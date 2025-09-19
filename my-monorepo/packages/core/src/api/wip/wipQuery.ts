import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWipInventoriesWipInventoryIdGetRequest,
  DefaultApiWipInventoriesWipInventoryIdDeleteRequest,
  DefaultApiWipInventoriesWipInventoryIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WIP_QUERY_KEY = "WIP";

export const wip = createQueryKeys(WIP_QUERY_KEY, {
  wipInventoriesWipInventoryIdGet: (params: DefaultApiWipInventoriesWipInventoryIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.wipInventoriesWipInventoryIdGet(params),
    };
  },
});

export const wipMutate = createMutationKeys(WIP_QUERY_KEY, {
  wipInventoriesWipInventoryIdDelete: (params: DefaultApiWipInventoriesWipInventoryIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wipInventoriesWipInventoryIdDelete(params),
    };
  },
  wipInventoriesWipInventoryIdPut: (params: DefaultApiWipInventoriesWipInventoryIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wipInventoriesWipInventoryIdPut(params),
    };
  },
});

export const wipQueryKeys = mergeQueryKeys(wip, wipMutate);