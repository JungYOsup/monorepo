import { authorizations } from "@core/api/authorizations/authorizationsQuery";
import { MasterApiAuthorizationsAuthorizationIdGetRequest, MasterApiAuthorizationsFindPostRequest, MasterApiAuthorizationsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useAuthorizationsAuthorizationsAuthorizationIdGetQuery = (params: MasterApiAuthorizationsAuthorizationIdGetRequest) => {
  return useQuery({
    ...authorizations.authorizationsAuthorizationIdGet(params),
    retry: 1,
  });
};

export const useAuthorizationsAuthorizationsFindPostQuery = (params: MasterApiAuthorizationsFindPostRequest) => {
  return useQuery({
    ...authorizations.authorizationsFindPost(params),
    enabled: !!params,
  });
};

export const useAuthorizationsAuthorizationsGetQuery = (params: MasterApiAuthorizationsGetRequest) => {
  return useQuery({
    ...authorizations.authorizationsGet(params),
    retry: 1,
  });
};
