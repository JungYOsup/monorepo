import { authLogoutMutate } from "@core/api/auth-logout/authLogoutQuery";
import { UserApiAuthLogoutPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAuthLogoutAuthLogoutPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, UserApiAuthLogoutPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["authLogoutPost"],
    mutationFn: (params: UserApiAuthLogoutPostRequest) => authLogoutMutate.authLogoutPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
