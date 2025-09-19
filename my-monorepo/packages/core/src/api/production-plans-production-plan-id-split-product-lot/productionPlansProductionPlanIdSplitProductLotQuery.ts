import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiProductionPlansProductionPlanIdSplitProductLotPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PRODUCTIONPLANSPRODUCTIONPLANIDSPLITPRODUCTLOT_QUERY_KEY = "PRODUCTIONPLANSPRODUCTIONPLANIDSPLITPRODUCTLOT";

export const productionPlansProductionPlanIdSplitProductLotMutate = createMutationKeys(PRODUCTIONPLANSPRODUCTIONPLANIDSPLITPRODUCTLOT_QUERY_KEY, {
  productionPlansProductionPlanIdSplitProductLotPost: (params: ProductionActionApiProductionPlansProductionPlanIdSplitProductLotPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.productionPlansProductionPlanIdSplitProductLotPost(params),
    };
  },
});

export const productionPlansProductionPlanIdSplitProductLotQueryKeys = productionPlansProductionPlanIdSplitProductLotMutate;