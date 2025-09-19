import { DefaultInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiBarcodePrintPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const BARCODEPRINT_QUERY_KEY = "BARCODEPRINT";

export const barcodePrintMutate = createMutationKeys(BARCODEPRINT_QUERY_KEY, {
  barcodePrintPost: (params: DefaultApiBarcodePrintPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.barcodePrintPost(params),
    };
  },
});

export const barcodePrintQueryKeys = barcodePrintMutate;