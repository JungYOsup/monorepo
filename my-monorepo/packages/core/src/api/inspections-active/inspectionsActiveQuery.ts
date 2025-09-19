import { SpcInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiInspectionsActiveGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INSPECTIONSACTIVE_QUERY_KEY = "INSPECTIONSACTIVE";

export const inspectionsActive = createQueryKeys(INSPECTIONSACTIVE_QUERY_KEY, {
  inspectionsActiveGet: (params: SpcApiInspectionsActiveGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.inspectionsActiveGet(params),
    };
  },
});

export const inspectionsActiveQueryKeys = inspectionsActive;