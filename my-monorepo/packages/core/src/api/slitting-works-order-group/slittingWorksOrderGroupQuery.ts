import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiSlittingWorksOrderGroupGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const SLITTINGWORKSORDERGROUP_QUERY_KEY = "SLITTINGWORKSORDERGROUP";

export const slittingWorksOrderGroup = createQueryKeys(SLITTINGWORKSORDERGROUP_QUERY_KEY, {
  slittingWorksOrderGroupGet: (params: DefaultApiSlittingWorksOrderGroupGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.slittingWorksOrderGroupGet(params),
    };
  },
});

export const slittingWorksOrderGroupQueryKeys = slittingWorksOrderGroup;