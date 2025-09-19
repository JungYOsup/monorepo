import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorksItemFindPostRequest,
  DefaultApiWorksItemGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSITEM_QUERY_KEY = "WORKSITEM";

export const worksItem = createQueryKeys(WORKSITEM_QUERY_KEY, {
  worksItemFindPost: (params: DefaultApiWorksItemFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksItemFindPost(params),
    };
  },
  worksItemGet: (params: DefaultApiWorksItemGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.worksItemGet(params),
    };
  },
});

export const worksItemQueryKeys = worksItem;