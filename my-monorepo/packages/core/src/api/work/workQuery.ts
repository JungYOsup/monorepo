import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorkLogsWorkLogIdGetRequest,
  DefaultApiWorkLogsWorksWorkLogIdGetRequest,
  DefaultApiWorkLogsWorkLogIdDeleteRequest,
  DefaultApiWorkLogsWorkLogIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORK_QUERY_KEY = "WORK";

export const work = createQueryKeys(WORK_QUERY_KEY, {
  workLogsWorkLogIdGet: (params: DefaultApiWorkLogsWorkLogIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.workLogsWorkLogIdGet(params),
    };
  },
  workLogsWorksWorkLogIdGet: (params: DefaultApiWorkLogsWorksWorkLogIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.workLogsWorksWorkLogIdGet(params),
    };
  },
});

export const workMutate = createMutationKeys(WORK_QUERY_KEY, {
  workLogsWorkLogIdDelete: (params: DefaultApiWorkLogsWorkLogIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.workLogsWorkLogIdDelete(params),
    };
  },
  workLogsWorkLogIdPut: (params: DefaultApiWorkLogsWorkLogIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.workLogsWorkLogIdPut(params),
    };
  },
});

export const workQueryKeys = mergeQueryKeys(work, workMutate);