import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiSplitLotFindPostRequest,
  DefaultApiSplitLotGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const SPLITLOT_QUERY_KEY = "SPLITLOT";

export const splitLot = createQueryKeys(SPLITLOT_QUERY_KEY, {
  splitLotFindPost: (params: DefaultApiSplitLotFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.splitLotFindPost(params),
    };
  },
  splitLotGet: (params: DefaultApiSplitLotGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.splitLotGet(params),
    };
  },
});

export const splitLotQueryKeys = splitLot;