import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiDowntimeReasonsUpdateSeqPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const DOWNTIMEREASONSUPDATESEQ_QUERY_KEY = "DOWNTIMEREASONSUPDATESEQ";

export const downtimeReasonsUpdateSeqMutate = createMutationKeys(DOWNTIMEREASONSUPDATESEQ_QUERY_KEY, {
  downtimeReasonsUpdateSeqPost: (params: DefaultApiDowntimeReasonsUpdateSeqPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.downtimeReasonsUpdateSeqPost(params),
    };
  },
});

export const downtimeReasonsUpdateSeqQueryKeys = downtimeReasonsUpdateSeqMutate;