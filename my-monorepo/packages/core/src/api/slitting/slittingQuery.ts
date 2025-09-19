import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiSlittingWorksOrderGroupSlittingWorkOrderGroupIdGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const SLITTING_QUERY_KEY = "SLITTING";

export const slitting = createQueryKeys(SLITTING_QUERY_KEY, {
  slittingWorksOrderGroupSlittingWorkOrderGroupIdGet: (params: DefaultApiSlittingWorksOrderGroupSlittingWorkOrderGroupIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.slittingWorksOrderGroupSlittingWorkOrderGroupIdGet(params),
    };
  },
});

export const slittingQueryKeys = slitting;