import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiDefectsFindPostRequest,
  DefaultApiDefectsGetRequest,
  DefaultApiDefectsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const DEFECTS_QUERY_KEY = "DEFECTS";

export const defects = createQueryKeys(DEFECTS_QUERY_KEY, {
  defectsFindPost: (params: DefaultApiDefectsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.defectsFindPost(params),
    };
  },
  defectsGet: (params: DefaultApiDefectsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.defectsGet(params),
    };
  },
});

export const defectsMutate = createMutationKeys(DEFECTS_QUERY_KEY, {
  defectsPost: (params: DefaultApiDefectsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.defectsPost(params),
    };
  },
});

export const defectsQueryKeys = mergeQueryKeys(defects, defectsMutate);