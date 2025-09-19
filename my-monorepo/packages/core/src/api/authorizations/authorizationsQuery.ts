import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiAuthorizationsAuthorizationIdGetRequest,
  MasterApiAuthorizationsFindPostRequest,
  MasterApiAuthorizationsGetRequest,
  MasterApiAuthorizationsAuthorizationIdDeleteRequest,
  MasterApiAuthorizationsAuthorizationIdPutRequest,
  MasterApiAuthorizationsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const AUTHORIZATIONS_QUERY_KEY = "AUTHORIZATIONS";

export const authorizations = createQueryKeys(AUTHORIZATIONS_QUERY_KEY, {
  authorizationsAuthorizationIdGet: (params: MasterApiAuthorizationsAuthorizationIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.authorizationsAuthorizationIdGet(params),
    };
  },
  authorizationsFindPost: (params: MasterApiAuthorizationsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.authorizationsFindPost(params),
    };
  },
  authorizationsGet: (params: MasterApiAuthorizationsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.authorizationsGet(params),
    };
  },
});

export const authorizationsMutate = createMutationKeys(AUTHORIZATIONS_QUERY_KEY, {
  authorizationsAuthorizationIdDelete: (params: MasterApiAuthorizationsAuthorizationIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.authorizationsAuthorizationIdDelete(params),
    };
  },
  authorizationsAuthorizationIdPut: (params: MasterApiAuthorizationsAuthorizationIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.authorizationsAuthorizationIdPut(params),
    };
  },
  authorizationsPost: (params: MasterApiAuthorizationsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.authorizationsPost(params),
    };
  },
});

export const authorizationsQueryKeys = mergeQueryKeys(authorizations, authorizationsMutate);