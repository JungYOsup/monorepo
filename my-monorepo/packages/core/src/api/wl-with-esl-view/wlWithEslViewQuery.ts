import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiWlWithEslViewFindPostRequest,
  MasterApiWlWithEslViewGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WLWITHESLVIEW_QUERY_KEY = "WLWITHESLVIEW";

export const wlWithEslView = createQueryKeys(WLWITHESLVIEW_QUERY_KEY, {
  wlWithEslViewFindPost: (params: MasterApiWlWithEslViewFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.wlWithEslViewFindPost(params),
    };
  },
  wlWithEslViewGet: (params: MasterApiWlWithEslViewGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.wlWithEslViewGet(params),
    };
  },
});

export const wlWithEslViewQueryKeys = wlWithEslView;