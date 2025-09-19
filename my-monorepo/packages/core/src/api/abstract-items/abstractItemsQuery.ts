import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiAbstractItemsFindPostRequest,
  DefaultApiAbstractItemsGetRequest,
  DefaultApiAbstractItemsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ABSTRACTITEMS_QUERY_KEY = "ABSTRACTITEMS";

export const abstractItems = createQueryKeys(ABSTRACTITEMS_QUERY_KEY, {
  abstractItemsFindPost: (params: DefaultApiAbstractItemsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.abstractItemsFindPost(params),
    };
  },
  abstractItemsGet: (params: DefaultApiAbstractItemsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.abstractItemsGet(params),
    };
  },
});

export const abstractItemsMutate = createMutationKeys(ABSTRACTITEMS_QUERY_KEY, {
  abstractItemsPost: (params: DefaultApiAbstractItemsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.abstractItemsPost(params),
    };
  },
});

export const abstractItemsQueryKeys = mergeQueryKeys(abstractItems, abstractItemsMutate);