import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiProductionPlansWorkLogIdCancelSplitProductLotPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PRODUCTIONPLANSWORKLOGIDCANCELSPLITPRODUCTLOT_QUERY_KEY = "PRODUCTIONPLANSWORKLOGIDCANCELSPLITPRODUCTLOT";

export const productionPlansWorkLogIdCancelSplitProductLotMutate = createMutationKeys(PRODUCTIONPLANSWORKLOGIDCANCELSPLITPRODUCTLOT_QUERY_KEY, {
  productionPlansWorkLogIdCancelSplitProductLotPost: (params: ProductionActionApiProductionPlansWorkLogIdCancelSplitProductLotPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.productionPlansWorkLogIdCancelSplitProductLotPost(params),
    };
  },
});

export const productionPlansWorkLogIdCancelSplitProductLotQueryKeys = productionPlansWorkLogIdCancelSplitProductLotMutate;