import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsDeferredLotInfoPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSDEFERREDLOTINFO_QUERY_KEY = "WMSDEFERREDLOTINFO";

export const wmsDeferredLotInfoMutate = createMutationKeys(WMSDEFERREDLOTINFO_QUERY_KEY, {
  wmsDeferredLotInfoPost: (params: DefaultApiWmsDeferredLotInfoPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsDeferredLotInfoPost(params),
    };
  },
});

export const wmsDeferredLotInfoQueryKeys = wmsDeferredLotInfoMutate;