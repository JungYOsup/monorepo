import { authLoginMutate } from "@core/api/auth-login/authLoginQuery";
import { UserApiAuthLoginPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAuthLoginAuthLoginPostMutation = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<any>,
      unknown,
      UserApiAuthLoginPostRequest,
      unknown
    >,
    "mutationFn" | "mutationKey"
  >
) => {
  return useMutation({
    mutationKey: ["authLoginPost"],
    mutationFn: (params: UserApiAuthLoginPostRequest) =>
      authLoginMutate.authLoginPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
