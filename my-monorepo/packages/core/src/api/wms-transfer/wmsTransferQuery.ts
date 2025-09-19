import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsTransferPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSTRANSFER_QUERY_KEY = "WMSTRANSFER";

export const wmsTransferMutate = createMutationKeys(WMSTRANSFER_QUERY_KEY, {
  wmsTransferPost: (params: DefaultApiWmsTransferPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsTransferPost(params),
    };
  },
});

export const wmsTransferQueryKeys = wmsTransferMutate;