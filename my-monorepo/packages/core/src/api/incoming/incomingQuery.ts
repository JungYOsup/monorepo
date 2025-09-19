import { SpcInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  SpcApiIncomingInspectionsIncomingInspectionIdGetRequest,
  SpcApiIncomingInspectionsIncomingInspectionIdDeleteRequest,
  SpcApiIncomingInspectionsIncomingInspectionIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const INCOMING_QUERY_KEY = "INCOMING";

export const incoming = createQueryKeys(INCOMING_QUERY_KEY, {
  incomingInspectionsIncomingInspectionIdGet: (params: SpcApiIncomingInspectionsIncomingInspectionIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => SpcInstance.incomingInspectionsIncomingInspectionIdGet(params),
    };
  },
});

export const incomingMutate = createMutationKeys(INCOMING_QUERY_KEY, {
  incomingInspectionsIncomingInspectionIdDelete: (params: SpcApiIncomingInspectionsIncomingInspectionIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.incomingInspectionsIncomingInspectionIdDelete(params),
    };
  },
  incomingInspectionsIncomingInspectionIdPut: (params: SpcApiIncomingInspectionsIncomingInspectionIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => SpcInstance.incomingInspectionsIncomingInspectionIdPut(params),
    };
  },
});

export const incomingQueryKeys = mergeQueryKeys(incoming, incomingMutate);