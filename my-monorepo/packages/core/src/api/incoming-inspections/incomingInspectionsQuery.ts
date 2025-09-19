import { SpcInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiIncomingInspectionsFindPostRequest,
  SpcApiIncomingInspectionsGetRequest,
  SpcApiIncomingInspectionsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INCOMINGINSPECTIONS_QUERY_KEY = "INCOMINGINSPECTIONS";

export const incomingInspections = createQueryKeys(INCOMINGINSPECTIONS_QUERY_KEY, {
  incomingInspectionsFindPost: (params: SpcApiIncomingInspectionsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.incomingInspectionsFindPost(params),
    };
  },
  incomingInspectionsGet: (params: SpcApiIncomingInspectionsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.incomingInspectionsGet(params),
    };
  },
});

export const incomingInspectionsMutate = createMutationKeys(INCOMINGINSPECTIONS_QUERY_KEY, {
  incomingInspectionsPost: (params: SpcApiIncomingInspectionsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.incomingInspectionsPost(params),
    };
  },
});

export const incomingInspectionsQueryKeys = mergeQueryKeys(incomingInspections, incomingInspectionsMutate);