import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiLotsGetProductionPlanLotNamePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const LOTSGETPRODUCTIONPLANLOTNAME_QUERY_KEY = "LOTSGETPRODUCTIONPLANLOTNAME";

export const lotsGetProductionPlanLotNameMutate = createMutationKeys(LOTSGETPRODUCTIONPLANLOTNAME_QUERY_KEY, {
  lotsGetProductionPlanLotNamePost: (params: DefaultApiLotsGetProductionPlanLotNamePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.lotsGetProductionPlanLotNamePost(params),
    };
  },
});

export const lotsGetProductionPlanLotNameQueryKeys = lotsGetProductionPlanLotNameMutate;