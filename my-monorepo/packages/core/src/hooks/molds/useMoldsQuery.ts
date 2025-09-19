import { molds } from "@core/api/molds/moldsQuery";
import { MasterApiMoldsFindPostRequest, MasterApiMoldsGetRequest, MasterApiMoldsMoldIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMoldsMoldsFindPostQuery = (params: MasterApiMoldsFindPostRequest) => {
  return useQuery({
    ...molds.moldsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useMoldsMoldsGetQuery = (params: MasterApiMoldsGetRequest) => {
  return useQuery({
    ...molds.moldsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useMoldsMoldsMoldIdGetQuery = (params: MasterApiMoldsMoldIdGetRequest) => {
  return useQuery({
    ...molds.moldsMoldIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
