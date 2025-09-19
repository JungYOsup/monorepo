import { authorizations } from "@core/api/authorizations/authorizationsQuery";
import { MasterApiAuthorizationsAuthorizationIdGetRequest, MasterApiAuthorizationsFindPostRequest, MasterApiAuthorizationsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useAuthorizationsAuthorizationsAuthorizationIdGetQuery = (params: MasterApiAuthorizationsAuthorizationIdGetRequest) => {
  return useQuery({
    ...authorizations.authorizationsAuthorizationIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useAuthorizationsAuthorizationsFindPostQuery = (params: MasterApiAuthorizationsFindPostRequest) => {
  return useQuery({
    ...authorizations.authorizationsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useAuthorizationsAuthorizationsGetQuery = (params: MasterApiAuthorizationsGetRequest) => {
  return useQuery({
    ...authorizations.authorizationsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
