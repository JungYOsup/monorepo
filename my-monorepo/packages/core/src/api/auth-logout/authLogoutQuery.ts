import { UserInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  UserApiAuthLogoutPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const AUTHLOGOUT_QUERY_KEY = "AUTHLOGOUT";

export const authLogoutMutate = createMutationKeys(AUTHLOGOUT_QUERY_KEY, {
  authLogoutPost: (params: UserApiAuthLogoutPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => UserInstance.authLogoutPost(params),
    };
  },
});

export const authLogoutQueryKeys = authLogoutMutate;