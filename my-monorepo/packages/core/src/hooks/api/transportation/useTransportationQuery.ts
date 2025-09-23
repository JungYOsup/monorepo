import { transportation } from "@core/api/transportation/transportationQuery";
import { ScmApiTransportationFindPostRequest, ScmApiTransportationGetRequest, ScmApiTransportationTransportationIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useTransportationTransportationFindPostQuery = (params: ScmApiTransportationFindPostRequest) => {
  return useQuery({
    ...transportation.transportationFindPost(params),
    enabled: !!params,
  });
};

export const useTransportationTransportationGetQuery = (params: ScmApiTransportationGetRequest) => {
  return useQuery({
    ...transportation.transportationGet(params),
    retry: 1,
  });
};

export const useTransportationTransportationTransportationIdGetQuery = (params: ScmApiTransportationTransportationIdGetRequest) => {
  return useQuery({
    ...transportation.transportationTransportationIdGet(params),
    retry: 1,
  });
};
