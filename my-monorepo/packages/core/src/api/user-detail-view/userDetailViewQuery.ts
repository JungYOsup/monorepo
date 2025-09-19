import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiUserDetailViewFindPostRequest,
  MasterApiUserDetailViewGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const USERDETAILVIEW_QUERY_KEY = "USERDETAILVIEW";

export const userDetailView = createQueryKeys(USERDETAILVIEW_QUERY_KEY, {
  userDetailViewFindPost: (params: MasterApiUserDetailViewFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.userDetailViewFindPost(params),
    };
  },
  userDetailViewGet: (params: MasterApiUserDetailViewGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.userDetailViewGet(params),
    };
  },
});

export const userDetailViewQueryKeys = userDetailView;