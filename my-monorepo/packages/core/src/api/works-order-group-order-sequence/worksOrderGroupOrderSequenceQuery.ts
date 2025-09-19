import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWorksOrderGroupOrderSequencePutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSORDERGROUPORDERSEQUENCE_QUERY_KEY = "WORKSORDERGROUPORDERSEQUENCE";

export const worksOrderGroupOrderSequenceMutate = createMutationKeys(WORKSORDERGROUPORDERSEQUENCE_QUERY_KEY, {
  worksOrderGroupOrderSequencePut: (params: DefaultApiWorksOrderGroupOrderSequencePutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.worksOrderGroupOrderSequencePut(params),
    };
  },
});

export const worksOrderGroupOrderSequenceQueryKeys = worksOrderGroupOrderSequenceMutate;