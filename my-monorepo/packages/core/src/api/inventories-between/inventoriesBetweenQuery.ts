import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiInventoriesBetweenFindPostRequest,
  DefaultApiInventoriesBetweenGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INVENTORIESBETWEEN_QUERY_KEY = "INVENTORIESBETWEEN";

export const inventoriesBetween = createQueryKeys(INVENTORIESBETWEEN_QUERY_KEY, {
  inventoriesBetweenFindPost: (params: DefaultApiInventoriesBetweenFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.inventoriesBetweenFindPost(params),
    };
  },
  inventoriesBetweenGet: (params: DefaultApiInventoriesBetweenGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.inventoriesBetweenGet(params),
    };
  },
});

export const inventoriesBetweenQueryKeys = inventoriesBetween;