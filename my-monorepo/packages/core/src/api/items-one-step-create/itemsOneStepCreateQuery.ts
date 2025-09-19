import { MasterInstance } from "@core/instance/axios";
import {
  createMutationKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiItemsOneStepCreatePostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const ITEMSONESTEPCREATE_QUERY_KEY = "ITEMSONESTEPCREATE";

export const itemsOneStepCreateMutate = createMutationKeys(ITEMSONESTEPCREATE_QUERY_KEY, {
  itemsOneStepCreatePost: (params: MasterApiItemsOneStepCreatePostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.itemsOneStepCreatePost(params),
    };
  },
});

export const itemsOneStepCreateQueryKeys = itemsOneStepCreateMutate;