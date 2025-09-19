import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiDefectsDefectCodeGetRequest,
  DefaultApiDefectsDefectCodeDeleteRequest,
  DefaultApiDefectsDefectCodePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const DEFECTSDEFECTCODE_QUERY_KEY = "DEFECTSDEFECTCODE";

export const defectsDefectCode = createQueryKeys(DEFECTSDEFECTCODE_QUERY_KEY, {
  defectsDefectCodeGet: (params: DefaultApiDefectsDefectCodeGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.defectsDefectCodeGet(params),
    };
  },
});

export const defectsDefectCodeMutate = createMutationKeys(DEFECTSDEFECTCODE_QUERY_KEY, {
  defectsDefectCodeDelete: (params: DefaultApiDefectsDefectCodeDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.defectsDefectCodeDelete(params),
    };
  },
  defectsDefectCodePut: (params: DefaultApiDefectsDefectCodePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.defectsDefectCodePut(params),
    };
  },
});

export const defectsDefectCodeQueryKeys = mergeQueryKeys(defectsDefectCode, defectsDefectCodeMutate);