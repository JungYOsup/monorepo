import { molds } from "@core/api/molds/moldsQuery";
import { MasterApiMoldsFindPostRequest, MasterApiMoldsGetRequest, MasterApiMoldsMoldIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMoldsMoldsFindPostQuery = (params: MasterApiMoldsFindPostRequest) => {
  return useQuery({
    ...molds.moldsFindPost(params),
    enabled: !!params,
  });
};

export const useMoldsMoldsGetQuery = (params: MasterApiMoldsGetRequest) => {
  return useQuery({
    ...molds.moldsGet(params),
    retry: 1,
  });
};

export const useMoldsMoldsMoldIdGetQuery = (params: MasterApiMoldsMoldIdGetRequest) => {
  return useQuery({
    ...molds.moldsMoldIdGet(params),
    retry: 1,
  });
};
