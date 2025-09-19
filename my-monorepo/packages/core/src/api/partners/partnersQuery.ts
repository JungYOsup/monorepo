import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiPartnersFindPostRequest,
  MasterApiPartnersGetRequest,
  MasterApiPartnersPartnerIdGetRequest,
  MasterApiPartnersPartnerIdDeleteRequest,
  MasterApiPartnersPartnerIdPutRequest,
  MasterApiPartnersPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PARTNERS_QUERY_KEY = "PARTNERS";

export const partners = createQueryKeys(PARTNERS_QUERY_KEY, {
  partnersFindPost: (params: MasterApiPartnersFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.partnersFindPost(params),
    };
  },
  partnersGet: (params: MasterApiPartnersGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.partnersGet(params),
    };
  },
  partnersPartnerIdGet: (params: MasterApiPartnersPartnerIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.partnersPartnerIdGet(params),
    };
  },
});

export const partnersMutate = createMutationKeys(PARTNERS_QUERY_KEY, {
  partnersPartnerIdDelete: (params: MasterApiPartnersPartnerIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.partnersPartnerIdDelete(params),
    };
  },
  partnersPartnerIdPut: (params: MasterApiPartnersPartnerIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.partnersPartnerIdPut(params),
    };
  },
  partnersPost: (params: MasterApiPartnersPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.partnersPost(params),
    };
  },
});

export const partnersQueryKeys = mergeQueryKeys(partners, partnersMutate);