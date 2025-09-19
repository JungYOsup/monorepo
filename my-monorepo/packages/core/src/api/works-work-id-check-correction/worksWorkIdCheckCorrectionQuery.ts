import { ProductionInstance } from "@core/instance/axios";
import {
  createQueryKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdCheckCorrectionGetRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDCHECKCORRECTION_QUERY_KEY = "WORKSWORKIDCHECKCORRECTION";

export const worksWorkIdCheckCorrection = createQueryKeys(WORKSWORKIDCHECKCORRECTION_QUERY_KEY, {
  worksWorkIdCheckCorrectionGet: (params: ProductionActionApiWorksWorkIdCheckCorrectionGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => ProductionInstance.worksWorkIdCheckCorrectionGet(params),
    };
  },
});

export const worksWorkIdCheckCorrectionQueryKeys = worksWorkIdCheckCorrection;