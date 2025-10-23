// packages/core/handlers/authHandler.ts

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthLoginAuthLoginPostMutation } from "@core/hooks/api/auth-login/useAuthLoginMutation";
import {
  AuthLoginService,
  AuthLoginServiceContract,
} from "@core/hooks/services/login/authLoginService";

import { useLocalStorage } from "@mantine/hooks";
import { AuthLoginPostRequest } from "@sizlcorp/sizl-api-document/dist/models";

export interface AuthHandler {
  handleLogin: (loginData: AuthLoginPostRequest) => Promise<any>;
}

type LoginFunction = AuthLoginServiceContract["login"] | undefined;

export const useDefaultAuthHandler = (loginFn: LoginFunction): AuthHandler => {
  const navigate = useNavigate();
  const [_, setIsAuthenticated] = useLocalStorage<string>({
    key: "isAuthenticated",
    defaultValue: "false",
  });

  const service = useMemo<AuthLoginServiceContract>(() => {
    if (loginFn) {
      return { login: loginFn };
    }
    return AuthLoginService;
  }, [loginFn]);

  const loginMutation = useAuthLoginAuthLoginPostMutation({
    service,
    options: {
      onSuccess: (response) => {
        setIsAuthenticated("true");
        return response;
      },
      onError: () => {
        setIsAuthenticated("false");
      },
    },
  });

  return {
    handleLogin: (loginData: AuthLoginPostRequest) => {
      return loginMutation.mutateAsync(loginData).then((result) => {
        navigate("/");
        return result;
      });
    },
  };
};
