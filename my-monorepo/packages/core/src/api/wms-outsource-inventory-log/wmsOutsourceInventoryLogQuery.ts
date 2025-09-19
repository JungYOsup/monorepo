import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsOutsourceInventoryLogPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSOUTSOURCEINVENTORYLOG_QUERY_KEY = "WMSOUTSOURCEINVENTORYLOG";

export const wmsOutsourceInventoryLogMutate = createMutationKeys(WMSOUTSOURCEINVENTORYLOG_QUERY_KEY, {
  wmsOutsourceInventoryLogPost: (params: DefaultApiWmsOutsourceInventoryLogPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsOutsourceInventoryLogPost(params),
    };
  },
});

export const wmsOutsourceInventoryLogQueryKeys = wmsOutsourceInventoryLogMutate;