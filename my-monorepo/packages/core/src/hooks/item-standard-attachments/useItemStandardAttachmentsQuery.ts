import { itemStandardAttachments } from "@core/api/item-standard-attachments/itemStandardAttachmentsQuery";
import { MasterApiItemStandardAttachmentsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useItemStandardAttachmentsItemStandardAttachmentsGetQuery = (params: MasterApiItemStandardAttachmentsGetRequest) => {
  return useQuery({
    ...itemStandardAttachments.itemStandardAttachmentsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
