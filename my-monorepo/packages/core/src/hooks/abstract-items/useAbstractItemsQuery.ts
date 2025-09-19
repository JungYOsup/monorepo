import { abstractItems } from "@core/api/abstract-items/abstractItemsQuery";
import { DefaultApiAbstractItemsFindPostRequest, DefaultApiAbstractItemsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useAbstractItemsAbstractItemsFindPostQuery = (params: DefaultApiAbstractItemsFindPostRequest) => {
  return useQuery({
    ...abstractItems.abstractItemsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useAbstractItemsAbstractItemsGetQuery = (params: DefaultApiAbstractItemsGetRequest) => {
  return useQuery({
    ...abstractItems.abstractItemsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
