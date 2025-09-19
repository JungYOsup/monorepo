import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiItemGradeViewFindPostRequest,
  DefaultApiItemGradeViewGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMGRADEVIEW_QUERY_KEY = "ITEMGRADEVIEW";

export const itemGradeView = createQueryKeys(ITEMGRADEVIEW_QUERY_KEY, {
  itemGradeViewFindPost: (params: DefaultApiItemGradeViewFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.itemGradeViewFindPost(params),
    };
  },
  itemGradeViewGet: (params: DefaultApiItemGradeViewGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.itemGradeViewGet(params),
    };
  },
});

export const itemGradeViewQueryKeys = itemGradeView;