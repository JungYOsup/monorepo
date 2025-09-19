import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiLotsGetLotNamePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const LOTSGETLOTNAME_QUERY_KEY = "LOTSGETLOTNAME";

export const lotsGetLotNameMutate = createMutationKeys(LOTSGETLOTNAME_QUERY_KEY, {
  lotsGetLotNamePost: (params: DefaultApiLotsGetLotNamePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.lotsGetLotNamePost(params),
    };
  },
});

export const lotsGetLotNameQueryKeys = lotsGetLotNameMutate;