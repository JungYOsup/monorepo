import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiDowntimeReasonsDowntimeReasonCodeGetRequest,
  DefaultApiDowntimeReasonsDowntimeReasonCodeDeleteRequest,
  DefaultApiDowntimeReasonsDowntimeReasonCodePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const DOWNTIMEREASONSDOWNTIMEREASONCODE_QUERY_KEY = "DOWNTIMEREASONSDOWNTIMEREASONCODE";

export const downtimeReasonsDowntimeReasonCode = createQueryKeys(DOWNTIMEREASONSDOWNTIMEREASONCODE_QUERY_KEY, {
  downtimeReasonsDowntimeReasonCodeGet: (params: DefaultApiDowntimeReasonsDowntimeReasonCodeGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.downtimeReasonsDowntimeReasonCodeGet(params),
    };
  },
});

export const downtimeReasonsDowntimeReasonCodeMutate = createMutationKeys(DOWNTIMEREASONSDOWNTIMEREASONCODE_QUERY_KEY, {
  downtimeReasonsDowntimeReasonCodeDelete: (params: DefaultApiDowntimeReasonsDowntimeReasonCodeDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.downtimeReasonsDowntimeReasonCodeDelete(params),
    };
  },
  downtimeReasonsDowntimeReasonCodePut: (params: DefaultApiDowntimeReasonsDowntimeReasonCodePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.downtimeReasonsDowntimeReasonCodePut(params),
    };
  },
});

export const downtimeReasonsDowntimeReasonCodeQueryKeys = mergeQueryKeys(downtimeReasonsDowntimeReasonCode, downtimeReasonsDowntimeReasonCodeMutate);