import { itemChanges } from "@core/api/item-changes/itemChangesQuery";
import { MasterApiItemChangesFindPostRequest, MasterApiItemChangesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemChangesItemChangesFindPostQuery = (params: MasterApiItemChangesFindPostRequest) => {
  return useQuery({
    ...itemChanges.itemChangesFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useItemChangesItemChangesGetQuery = (params: MasterApiItemChangesGetRequest) => {
  return useQuery({
    ...itemChanges.itemChangesGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
