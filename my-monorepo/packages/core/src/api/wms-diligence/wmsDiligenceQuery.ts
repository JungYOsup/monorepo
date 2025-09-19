import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsDiligencePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSDILIGENCE_QUERY_KEY = "WMSDILIGENCE";

export const wmsDiligenceMutate = createMutationKeys(WMSDILIGENCE_QUERY_KEY, {
  wmsDiligencePost: (params: DefaultApiWmsDiligencePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsDiligencePost(params),
    };
  },
});

export const wmsDiligenceQueryKeys = wmsDiligenceMutate;