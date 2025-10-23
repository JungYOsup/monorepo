import { AUTHLOGIN_QUERY_KEY } from "@core/api/auth-login/authLoginQuery";
import {
  AuthLoginService,
  AuthLoginServiceContract,
} from "@core/hooks/services/login/authLoginService";
import { AuthLoginPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

type MutationOptions = Omit<
  UseMutationOptions<
    AxiosResponse<any>,
    unknown,
    AuthLoginPostRequest,
    unknown
  >,
  "mutationFn" | "mutationKey"
>;

interface UseAuthLoginMutationArgs {
  service?: AuthLoginServiceContract;
  options?: MutationOptions;
}

export const useAuthLoginAuthLoginPostMutation = ({
  service = AuthLoginService,
  options,
}: UseAuthLoginMutationArgs = {}) => {
  return useMutation({
    mutationKey: [AUTHLOGIN_QUERY_KEY, "authLoginPost"],
    mutationFn: (params: AuthLoginPostRequest) =>
      service.login({
        authLoginPostRequest: params,
      }),
    ...(options ?? {}),
  });
};
