import { ProductionInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  ProductionActionApiWorkLogsCheckDefectLotPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WORKLOGSCHECKDEFECTLOT_QUERY_KEY = "WORKLOGSCHECKDEFECTLOT";

export const workLogsCheckDefectLotMutate = createMutationKeys(WORKLOGSCHECKDEFECTLOT_QUERY_KEY, {
  workLogsCheckDefectLotPost: (params: ProductionActionApiWorkLogsCheckDefectLotPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => ProductionInstance.workLogsCheckDefectLotPost(params),
    };
  },
});

export const workLogsCheckDefectLotQueryKeys = workLogsCheckDefectLotMutate;