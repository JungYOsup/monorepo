import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdDesignStartPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDDESIGNSTART_QUERY_KEY = "WORKSWORKIDDESIGNSTART";

export const worksWorkIdDesignStartMutate = createMutationKeys(WORKSWORKIDDESIGNSTART_QUERY_KEY, {
  worksWorkIdDesignStartPost: (params: ProductionActionApiWorksWorkIdDesignStartPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdDesignStartPost(params),
    };
  },
});

export const worksWorkIdDesignStartQueryKeys = worksWorkIdDesignStartMutate;