import { UserInstance } from "@core/instance/axios";
import { UserApiAuthLoginPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

type AuthLoginClient = Pick<typeof UserInstance, "authLoginPost">;

export interface AuthLoginServiceContract {
  login: (payload: UserApiAuthLoginPostRequest) => Promise<AxiosResponse<any>>;
}

export const createAuthLoginService = (
  client: AuthLoginClient = UserInstance
): AuthLoginServiceContract => ({
  login: (payload) => client.authLoginPost(payload),
});

export const AuthLoginService = createAuthLoginService();
