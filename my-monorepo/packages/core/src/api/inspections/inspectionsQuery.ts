import { SpcInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiInspectionsFindPostRequest,
  SpcApiInspectionsGetRequest,
  SpcApiInspectionsInspectionIdGetRequest,
  SpcApiInspectionsInspectionIdDeleteRequest,
  SpcApiInspectionsInspectionIdPutRequest,
  SpcApiInspectionsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INSPECTIONS_QUERY_KEY = "INSPECTIONS";

export const inspections = createQueryKeys(INSPECTIONS_QUERY_KEY, {
  inspectionsFindPost: (params: SpcApiInspectionsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.inspectionsFindPost(params),
    };
  },
  inspectionsGet: (params: SpcApiInspectionsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.inspectionsGet(params),
    };
  },
  inspectionsInspectionIdGet: (params: SpcApiInspectionsInspectionIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.inspectionsInspectionIdGet(params),
    };
  },
});

export const inspectionsMutate = createMutationKeys(INSPECTIONS_QUERY_KEY, {
  inspectionsInspectionIdDelete: (params: SpcApiInspectionsInspectionIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.inspectionsInspectionIdDelete(params),
    };
  },
  inspectionsInspectionIdPut: (params: SpcApiInspectionsInspectionIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.inspectionsInspectionIdPut(params),
    };
  },
  inspectionsPost: (params: SpcApiInspectionsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.inspectionsPost(params),
    };
  },
});

export const inspectionsQueryKeys = mergeQueryKeys(inspections, inspectionsMutate);