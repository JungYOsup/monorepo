import { UserInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  UserApiAuthLoginPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const AUTHLOGIN_QUERY_KEY = "AUTHLOGIN";

export const authLoginMutate = createMutationKeys(AUTHLOGIN_QUERY_KEY, {
  authLoginPost: (params: UserApiAuthLoginPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => UserInstance.authLoginPost(params),
    };
  },
});

export const authLoginQueryKeys = authLoginMutate;