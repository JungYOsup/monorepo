// packages/core/handlers/authHandler.ts

import { useAuthLoginAuthLoginPostMutation } from "@core/hooks/api/auth-login/useAuthLoginMutation";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export interface AuthHandler {
  handleLogin: (loginData: { id: string; password: string }) => void;
}

export const useDefaultAuthHandler = (): AuthHandler => {
  const loginMutation = useAuthLoginAuthLoginPostMutation();
  const navigate = useNavigate();
  const [_, setIsAuthenticated] = useLocalStorage({
    key: "isAuthenticated",
    defaultValue: false,
  });

  return {
    handleLogin: (loginData: { id: string; password: string }) => {
      loginMutation.mutate(
        {
          authLoginPostRequest: {
            identifier: loginData.id,
            password: loginData.password,
          },
        },
        {
          onSuccess: (data) => {
            const authToken = data.data.token;
            localStorage.setItem("authToken", authToken);
            console.log("✅ 로그인 성공:", authToken);
            navigate("/works");
            setIsAuthenticated(true);
          },
          onError: (error) => {
            console.error("❌ 로그인 실패:", error);
          },
        }
      );
    },
  };
};
