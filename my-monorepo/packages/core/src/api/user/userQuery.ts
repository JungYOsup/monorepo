import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiUserDetailViewUserIdGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const USER_QUERY_KEY = "USER";

export const user = createQueryKeys(USER_QUERY_KEY, {
  userDetailViewUserIdGet: (params: MasterApiUserDetailViewUserIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.userDetailViewUserIdGet(params),
    };
  },
});

export const userQueryKeys = user;