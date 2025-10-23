import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiMenuListsUpdateSeqPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const MENULISTSUPDATESEQ_QUERY_KEY = "MENULISTSUPDATESEQ";

export const menuListsUpdateSeqMutate = createMutationKeys(MENULISTSUPDATESEQ_QUERY_KEY, {
  menuListsUpdateSeqPost: (params: MasterApiMenuListsUpdateSeqPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.menuListsUpdateSeqPost(params),
    };
  },
});

export const menuListsUpdateSeqQueryKeys = menuListsUpdateSeqMutate;