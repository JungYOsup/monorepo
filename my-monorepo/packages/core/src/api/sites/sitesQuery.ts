import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiSitesFindPostRequest,
  MasterApiSitesGetRequest,
  MasterApiSitesSiteIdGetRequest,
  MasterApiSitesPostRequest,
  MasterApiSitesSiteIdDeleteRequest,
  MasterApiSitesSiteIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const SITES_QUERY_KEY = "SITES";

export const sites = createQueryKeys(SITES_QUERY_KEY, {
  sitesFindPost: (params: MasterApiSitesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.sitesFindPost(params),
    };
  },
  sitesGet: (params: MasterApiSitesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.sitesGet(params),
    };
  },
  sitesSiteIdGet: (params: MasterApiSitesSiteIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.sitesSiteIdGet(params),
    };
  },
});

export const sitesMutate = createMutationKeys(SITES_QUERY_KEY, {
  sitesPost: (params: MasterApiSitesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.sitesPost(params),
    };
  },
  sitesSiteIdDelete: (params: MasterApiSitesSiteIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.sitesSiteIdDelete(params),
    };
  },
  sitesSiteIdPut: (params: MasterApiSitesSiteIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.sitesSiteIdPut(params),
    };
  },
});

export const sitesQueryKeys = mergeQueryKeys(sites, sitesMutate);