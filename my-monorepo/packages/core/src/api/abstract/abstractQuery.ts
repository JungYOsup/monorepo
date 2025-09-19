import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiAbstractItemsAbstractItemIdGetRequest,
  DefaultApiAbstractItemsAbstractItemIdDeleteRequest,
  DefaultApiAbstractItemsAbstractItemIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ABSTRACT_QUERY_KEY = "ABSTRACT";

export const abstract = createQueryKeys(ABSTRACT_QUERY_KEY, {
  abstractItemsAbstractItemIdGet: (params: DefaultApiAbstractItemsAbstractItemIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.abstractItemsAbstractItemIdGet(params),
    };
  },
});

export const abstractMutate = createMutationKeys(ABSTRACT_QUERY_KEY, {
  abstractItemsAbstractItemIdDelete: (params: DefaultApiAbstractItemsAbstractItemIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.abstractItemsAbstractItemIdDelete(params),
    };
  },
  abstractItemsAbstractItemIdPut: (params: DefaultApiAbstractItemsAbstractItemIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.abstractItemsAbstractItemIdPut(params),
    };
  },
});

export const abstractQueryKeys = mergeQueryKeys(abstract, abstractMutate);