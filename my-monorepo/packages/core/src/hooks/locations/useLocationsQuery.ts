import { locations } from "@core/api/locations/locationsQuery";
import { MasterApiLocationsFindPostRequest, MasterApiLocationsGetRequest, MasterApiLocationsLocationIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useLocationsLocationsFindPostQuery = (params: MasterApiLocationsFindPostRequest) => {
  return useQuery({
    ...locations.locationsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useLocationsLocationsGetQuery = (params: MasterApiLocationsGetRequest) => {
  return useQuery({
    ...locations.locationsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useLocationsLocationsLocationIdGetQuery = (params: MasterApiLocationsLocationIdGetRequest) => {
  return useQuery({
    ...locations.locationsLocationIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
