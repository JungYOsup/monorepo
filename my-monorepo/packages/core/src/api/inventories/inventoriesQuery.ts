import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiInventoriesFindPostRequest,
  DefaultApiInventoriesGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INVENTORIES_QUERY_KEY = "INVENTORIES";

export const inventories = createQueryKeys(INVENTORIES_QUERY_KEY, {
  inventoriesFindPost: (params: DefaultApiInventoriesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.inventoriesFindPost(params),
    };
  },
  inventoriesGet: (params: DefaultApiInventoriesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.inventoriesGet(params),
    };
  },
});

export const inventoriesQueryKeys = inventories;