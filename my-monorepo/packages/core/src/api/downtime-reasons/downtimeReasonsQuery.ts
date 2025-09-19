import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiDowntimeReasonsFindPostRequest,
  DefaultApiDowntimeReasonsGetRequest,
  DefaultApiDowntimeReasonsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const DOWNTIMEREASONS_QUERY_KEY = "DOWNTIMEREASONS";

export const downtimeReasons = createQueryKeys(DOWNTIMEREASONS_QUERY_KEY, {
  downtimeReasonsFindPost: (params: DefaultApiDowntimeReasonsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.downtimeReasonsFindPost(params),
    };
  },
  downtimeReasonsGet: (params: DefaultApiDowntimeReasonsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.downtimeReasonsGet(params),
    };
  },
});

export const downtimeReasonsMutate = createMutationKeys(DOWNTIMEREASONS_QUERY_KEY, {
  downtimeReasonsPost: (params: DefaultApiDowntimeReasonsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.downtimeReasonsPost(params),
    };
  },
});

export const downtimeReasonsQueryKeys = mergeQueryKeys(downtimeReasons, downtimeReasonsMutate);