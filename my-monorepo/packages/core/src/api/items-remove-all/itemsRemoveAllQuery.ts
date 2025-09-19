import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiItemsRemoveAllDeleteRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMSREMOVEALL_QUERY_KEY = "ITEMSREMOVEALL";

export const itemsRemoveAllMutate = createMutationKeys(ITEMSREMOVEALL_QUERY_KEY, {
  itemsRemoveAllDelete: (params: MasterApiItemsRemoveAllDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemsRemoveAllDelete(params),
    };
  },
});

export const itemsRemoveAllQueryKeys = itemsRemoveAllMutate;