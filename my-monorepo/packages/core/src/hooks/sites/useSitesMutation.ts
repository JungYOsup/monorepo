import { sitesMutate } from "@core/api/sites/sitesQuery";
import { MasterApiSitesPostRequest, MasterApiSitesSiteIdDeleteRequest, MasterApiSitesSiteIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useSitesSitesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiSitesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["sitesPost"],
    mutationFn: (params: MasterApiSitesPostRequest) => sitesMutate.sitesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useSitesSitesSiteIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiSitesSiteIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["sitesSiteIdDelete"],
    mutationFn: (params: MasterApiSitesSiteIdDeleteRequest) => sitesMutate.sitesSiteIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useSitesSitesSiteIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiSitesSiteIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["sitesSiteIdPut"],
    mutationFn: (params: MasterApiSitesSiteIdPutRequest) => sitesMutate.sitesSiteIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
