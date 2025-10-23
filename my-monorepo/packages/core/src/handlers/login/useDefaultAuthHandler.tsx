// packages/core/handlers/authHandler.ts

import { useAuthLoginAuthLoginPostMutation } from "@core/hooks/api/auth-login/useAuthLoginMutation";

import { useLocalStorage } from "@mantine/hooks";
import { AuthLoginPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useNavigate } from "react-router-dom";

export interface AuthHandler {
  handleLogin: (loginData: AuthLoginPostRequest) => Promise<any>;
}

export const useDefaultAuthHandler = (loginFn: any): AuthHandler => {
  const loginMutation = useAuthLoginAuthLoginPostMutation();
  const navigate = useNavigate();
  const [_, setIsAuthenticated] = useLocalStorage({
    key: "isAuthenticated",
    defaultValue: false,
  });

  return {
    handleLogin: (loginData: AuthLoginPostRequest) => {
      return loginFn(loginData);
    },
  };
};
