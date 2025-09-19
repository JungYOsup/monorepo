import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiItemsValidatePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMSVALIDATE_QUERY_KEY = "ITEMSVALIDATE";

export const itemsValidateMutate = createMutationKeys(ITEMSVALIDATE_QUERY_KEY, {
  itemsValidatePost: (params: MasterApiItemsValidatePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemsValidatePost(params),
    };
  },
});

export const itemsValidateQueryKeys = itemsValidateMutate;