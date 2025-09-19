import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiWmsTransformPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const WMSTRANSFORM_QUERY_KEY = "WMSTRANSFORM";

export const wmsTransformMutate = createMutationKeys(WMSTRANSFORM_QUERY_KEY, {
  wmsTransformPost: (params: DefaultApiWmsTransformPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.wmsTransformPost(params),
    };
  },
});

export const wmsTransformQueryKeys = wmsTransformMutate;