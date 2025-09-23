import { itemChanges } from "@core/api/item-changes/itemChangesQuery";
import { MasterApiItemChangesFindPostRequest, MasterApiItemChangesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemChangesItemChangesFindPostQuery = (params: MasterApiItemChangesFindPostRequest) => {
  return useQuery({
    ...itemChanges.itemChangesFindPost(params),
    enabled: !!params,
  });
};

export const useItemChangesItemChangesGetQuery = (params: MasterApiItemChangesGetRequest) => {
  return useQuery({
    ...itemChanges.itemChangesGet(params),
    retry: 1,
  });
};
