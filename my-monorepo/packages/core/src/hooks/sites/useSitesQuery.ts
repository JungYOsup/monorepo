import { sites } from "@core/api/sites/sitesQuery";
import { MasterApiSitesFindPostRequest, MasterApiSitesGetRequest, MasterApiSitesSiteIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSitesSitesFindPostQuery = (params: MasterApiSitesFindPostRequest) => {
  return useQuery({
    ...sites.sitesFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useSitesSitesGetQuery = (params: MasterApiSitesGetRequest) => {
  return useQuery({
    ...sites.sitesGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useSitesSitesSiteIdGetQuery = (params: MasterApiSitesSiteIdGetRequest) => {
  return useQuery({
    ...sites.sitesSiteIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
