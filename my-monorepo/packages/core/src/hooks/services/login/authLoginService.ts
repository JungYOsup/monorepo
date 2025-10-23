// packages/core/src/services/auth.service.ts
import { useAuthLoginAuthLoginPostMutation } from "@core/hooks/api/auth-login/useAuthLoginMutation";

export const AuthLoginService = {
  async login(req: any) {
    const { mutate: loginMutate } = useAuthLoginAuthLoginPostMutation();
    return loginMutate(
      {
        authLoginPostRequest: {
          identifier: req.identifier,
          password: req.password,
        },
      },
      {
        onSuccess: (data) => {
          return data;
        },
        onError: (error) => {
          throw error;
        },
      }
    );
  },
};
