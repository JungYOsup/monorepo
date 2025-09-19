import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiInterportImportPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INTERPORTIMPORT_QUERY_KEY = "INTERPORTIMPORT";

export const interportImportMutate = createMutationKeys(INTERPORTIMPORT_QUERY_KEY, {
  interportImportPost: (params: DefaultApiInterportImportPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.interportImportPost(params),
    };
  },
});

export const interportImportQueryKeys = interportImportMutate;