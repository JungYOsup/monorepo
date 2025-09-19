import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiOperationsFindPostRequest,
  DefaultApiOperationsGetRequest,
  DefaultApiOperationsOperationIdGetRequest,
  DefaultApiOperationsOperationIdDeleteRequest,
  DefaultApiOperationsOperationIdPutRequest,
  DefaultApiOperationsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const OPERATIONS_QUERY_KEY = "OPERATIONS";

export const operations = createQueryKeys(OPERATIONS_QUERY_KEY, {
  operationsFindPost: (params: DefaultApiOperationsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.operationsFindPost(params),
    };
  },
  operationsGet: (params: DefaultApiOperationsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.operationsGet(params),
    };
  },
  operationsOperationIdGet: (params: DefaultApiOperationsOperationIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.operationsOperationIdGet(params),
    };
  },
});

export const operationsMutate = createMutationKeys(OPERATIONS_QUERY_KEY, {
  operationsOperationIdDelete: (params: DefaultApiOperationsOperationIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.operationsOperationIdDelete(params),
    };
  },
  operationsOperationIdPut: (params: DefaultApiOperationsOperationIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.operationsOperationIdPut(params),
    };
  },
  operationsPost: (params: DefaultApiOperationsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.operationsPost(params),
    };
  },
});

export const operationsQueryKeys = mergeQueryKeys(operations, operationsMutate);