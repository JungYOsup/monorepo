import { UserInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  UserApiAuthSignupPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const AUTHSIGNUP_QUERY_KEY = "AUTHSIGNUP";

export const authSignupMutate = createMutationKeys(AUTHSIGNUP_QUERY_KEY, {
  authSignupPost: (params: UserApiAuthSignupPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => UserInstance.authSignupPost(params),
    };
  },
});

export const authSignupQueryKeys = authSignupMutate;