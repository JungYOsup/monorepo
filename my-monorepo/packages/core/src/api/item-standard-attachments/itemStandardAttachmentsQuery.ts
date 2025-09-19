import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiItemStandardAttachmentsGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMSTANDARDATTACHMENTS_QUERY_KEY = "ITEMSTANDARDATTACHMENTS";

export const itemStandardAttachments = createQueryKeys(ITEMSTANDARDATTACHMENTS_QUERY_KEY, {
  itemStandardAttachmentsGet: (params: MasterApiItemStandardAttachmentsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.itemStandardAttachmentsGet(params),
    };
  },
});

export const itemStandardAttachmentsQueryKeys = itemStandardAttachments;