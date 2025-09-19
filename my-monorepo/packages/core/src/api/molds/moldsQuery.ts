import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiMoldsFindPostRequest,
  MasterApiMoldsGetRequest,
  MasterApiMoldsMoldIdGetRequest,
  MasterApiMoldsMoldIdDeleteRequest,
  MasterApiMoldsMoldIdPutRequest,
  MasterApiMoldsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const MOLDS_QUERY_KEY = "MOLDS";

export const molds = createQueryKeys(MOLDS_QUERY_KEY, {
  moldsFindPost: (params: MasterApiMoldsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.moldsFindPost(params),
    };
  },
  moldsGet: (params: MasterApiMoldsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.moldsGet(params),
    };
  },
  moldsMoldIdGet: (params: MasterApiMoldsMoldIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.moldsMoldIdGet(params),
    };
  },
});

export const moldsMutate = createMutationKeys(MOLDS_QUERY_KEY, {
  moldsMoldIdDelete: (params: MasterApiMoldsMoldIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.moldsMoldIdDelete(params),
    };
  },
  moldsMoldIdPut: (params: MasterApiMoldsMoldIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.moldsMoldIdPut(params),
    };
  },
  moldsPost: (params: MasterApiMoldsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.moldsPost(params),
    };
  },
});

export const moldsQueryKeys = mergeQueryKeys(molds, moldsMutate);