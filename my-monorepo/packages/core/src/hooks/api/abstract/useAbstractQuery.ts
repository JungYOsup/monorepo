import { abstract } from "@core/api/abstract/abstractQuery";
import { DefaultApiAbstractItemsAbstractItemIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useAbstractAbstractItemsAbstractItemIdGetQuery = (params: DefaultApiAbstractItemsAbstractItemIdGetRequest) => {
  return useQuery({
    ...abstract.abstractItemsAbstractItemIdGet(params),
    retry: 1,
  });
};
