import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiBarcodePrintArrayPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const BARCODEPRINTARRAY_QUERY_KEY = "BARCODEPRINTARRAY";

export const barcodePrintArrayMutate = createMutationKeys(BARCODEPRINTARRAY_QUERY_KEY, {
  barcodePrintArrayPost: (params: DefaultApiBarcodePrintArrayPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.barcodePrintArrayPost(params),
    };
  },
});

export const barcodePrintArrayQueryKeys = barcodePrintArrayMutate;