import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiWlWithEslViewWlWithEslViewIdGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WL_QUERY_KEY = "WL";

export const wl = createQueryKeys(WL_QUERY_KEY, {
  wlWithEslViewWlWithEslViewIdGet: (params: MasterApiWlWithEslViewWlWithEslViewIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.wlWithEslViewWlWithEslViewIdGet(params),
    };
  },
});

export const wlQueryKeys = wl;