import { authSignupMutate } from "@core/api/auth-signup/authSignupQuery";
import { UserApiAuthSignupPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAuthSignupAuthSignupPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, UserApiAuthSignupPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["authSignupPost"],
    mutationFn: (params: UserApiAuthSignupPostRequest) => authSignupMutate.authSignupPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
