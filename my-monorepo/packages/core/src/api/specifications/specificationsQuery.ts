import { SpcInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiSpecificationsFindPostRequest,
  SpcApiSpecificationsGetRequest,
  SpcApiSpecificationsSpecificationIdGetRequest,
  SpcApiSpecificationsPostRequest,
  SpcApiSpecificationsSpecificationIdDeleteRequest,
  SpcApiSpecificationsSpecificationIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const SPECIFICATIONS_QUERY_KEY = "SPECIFICATIONS";

export const specifications = createQueryKeys(SPECIFICATIONS_QUERY_KEY, {
  specificationsFindPost: (params: SpcApiSpecificationsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.specificationsFindPost(params),
    };
  },
  specificationsGet: (params: SpcApiSpecificationsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.specificationsGet(params),
    };
  },
  specificationsSpecificationIdGet: (params: SpcApiSpecificationsSpecificationIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.specificationsSpecificationIdGet(params),
    };
  },
});

export const specificationsMutate = createMutationKeys(SPECIFICATIONS_QUERY_KEY, {
  specificationsPost: (params: SpcApiSpecificationsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.specificationsPost(params),
    };
  },
  specificationsSpecificationIdDelete: (params: SpcApiSpecificationsSpecificationIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.specificationsSpecificationIdDelete(params),
    };
  },
  specificationsSpecificationIdPut: (params: SpcApiSpecificationsSpecificationIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.specificationsSpecificationIdPut(params),
    };
  },
});

export const specificationsQueryKeys = mergeQueryKeys(specifications, specificationsMutate);