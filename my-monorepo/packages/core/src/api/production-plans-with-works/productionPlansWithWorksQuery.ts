import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiProductionPlansWithWorksPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PRODUCTIONPLANSWITHWORKS_QUERY_KEY = "PRODUCTIONPLANSWITHWORKS";

export const productionPlansWithWorksMutate = createMutationKeys(PRODUCTIONPLANSWITHWORKS_QUERY_KEY, {
  productionPlansWithWorksPost: (params: ProductionActionApiProductionPlansWithWorksPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.productionPlansWithWorksPost(params),
    };
  },
});

export const productionPlansWithWorksQueryKeys = productionPlansWithWorksMutate;