import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiProductionPlansGenerateDraftWorksPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PRODUCTIONPLANSGENERATEDRAFTWORKS_QUERY_KEY = "PRODUCTIONPLANSGENERATEDRAFTWORKS";

export const productionPlansGenerateDraftWorksMutate = createMutationKeys(PRODUCTIONPLANSGENERATEDRAFTWORKS_QUERY_KEY, {
  productionPlansGenerateDraftWorksPost: (params: ProductionActionApiProductionPlansGenerateDraftWorksPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.productionPlansGenerateDraftWorksPost(params),
    };
  },
});

export const productionPlansGenerateDraftWorksQueryKeys = productionPlansGenerateDraftWorksMutate;