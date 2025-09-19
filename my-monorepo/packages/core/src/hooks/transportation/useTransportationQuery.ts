import { transportation } from "@core/api/transportation/transportationQuery";
import { ScmApiTransportationFindPostRequest, ScmApiTransportationGetRequest, ScmApiTransportationTransportationIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useTransportationTransportationFindPostQuery = (params: ScmApiTransportationFindPostRequest) => {
  return useQuery({
    ...transportation.transportationFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useTransportationTransportationGetQuery = (params: ScmApiTransportationGetRequest) => {
  return useQuery({
    ...transportation.transportationGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useTransportationTransportationTransportationIdGetQuery = (params: ScmApiTransportationTransportationIdGetRequest) => {
  return useQuery({
    ...transportation.transportationTransportationIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
