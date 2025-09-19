import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiItemGradeViewItemIdGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEM_QUERY_KEY = "ITEM";

export const item = createQueryKeys(ITEM_QUERY_KEY, {
  itemGradeViewItemIdGet: (params: DefaultApiItemGradeViewItemIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.itemGradeViewItemIdGet(params),
    };
  },
});

export const itemQueryKeys = item;