import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiSplitLotWorkLogIdGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const SPLIT_QUERY_KEY = "SPLIT";

export const split = createQueryKeys(SPLIT_QUERY_KEY, {
  splitLotWorkLogIdGet: (params: DefaultApiSplitLotWorkLogIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.splitLotWorkLogIdGet(params),
    };
  },
});

export const splitQueryKeys = split;