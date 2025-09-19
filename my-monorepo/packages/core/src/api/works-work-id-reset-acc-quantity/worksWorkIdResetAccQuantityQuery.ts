import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorksWorkIdResetAccQuantityPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKSWORKIDRESETACCQUANTITY_QUERY_KEY = "WORKSWORKIDRESETACCQUANTITY";

export const worksWorkIdResetAccQuantityMutate = createMutationKeys(WORKSWORKIDRESETACCQUANTITY_QUERY_KEY, {
  worksWorkIdResetAccQuantityPut: (params: ProductionActionApiWorksWorkIdResetAccQuantityPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.worksWorkIdResetAccQuantityPut(params),
    };
  },
});

export const worksWorkIdResetAccQuantityQueryKeys = worksWorkIdResetAccQuantityMutate;