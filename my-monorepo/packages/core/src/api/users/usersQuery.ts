import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiUsersFindPostRequest,
  MasterApiUsersGetRequest,
  MasterApiUsersUserIdGetRequest,
  MasterApiUsersPostRequest,
  MasterApiUsersUserIdDeleteRequest,
  MasterApiUsersUserIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const USERS_QUERY_KEY = "USERS";

export const users = createQueryKeys(USERS_QUERY_KEY, {
  usersFindPost: (params: MasterApiUsersFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.usersFindPost(params),
    };
  },
  usersGet: (params: MasterApiUsersGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.usersGet(params),
    };
  },
  usersUserIdGet: (params: MasterApiUsersUserIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.usersUserIdGet(params),
    };
  },
});

export const usersMutate = createMutationKeys(USERS_QUERY_KEY, {
  usersPost: (params: MasterApiUsersPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.usersPost(params),
    };
  },
  usersUserIdDelete: (params: MasterApiUsersUserIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.usersUserIdDelete(params),
    };
  },
  usersUserIdPut: (params: MasterApiUsersUserIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.usersUserIdPut(params),
    };
  },
});

export const usersQueryKeys = mergeQueryKeys(users, usersMutate);