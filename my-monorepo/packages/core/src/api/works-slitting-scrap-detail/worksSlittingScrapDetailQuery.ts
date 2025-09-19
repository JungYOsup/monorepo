import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksSlittingScrapDetailPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSSLITTINGSCRAPDETAIL_QUERY_KEY = "WORKSSLITTINGSCRAPDETAIL";

export const worksSlittingScrapDetailMutate = createMutationKeys(WORKSSLITTINGSCRAPDETAIL_QUERY_KEY, {
  worksSlittingScrapDetailPost: (params: ProductionActionApiWorksSlittingScrapDetailPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksSlittingScrapDetailPost(params),
    };
  },
});

export const worksSlittingScrapDetailQueryKeys = worksSlittingScrapDetailMutate;