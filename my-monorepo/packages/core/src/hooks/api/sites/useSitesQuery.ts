import { sites } from "@core/api/sites/sitesQuery";
import { MasterApiSitesFindPostRequest, MasterApiSitesGetRequest, MasterApiSitesSiteIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSitesSitesFindPostQuery = (params: MasterApiSitesFindPostRequest) => {
  return useQuery({
    ...sites.sitesFindPost(params),
    enabled: !!params,
  });
};

export const useSitesSitesGetQuery = (params: MasterApiSitesGetRequest) => {
  return useQuery({
    ...sites.sitesGet(params),
    retry: 1,
  });
};

export const useSitesSitesSiteIdGetQuery = (params: MasterApiSitesSiteIdGetRequest) => {
  return useQuery({
    ...sites.sitesSiteIdGet(params),
    retry: 1,
  });
};
