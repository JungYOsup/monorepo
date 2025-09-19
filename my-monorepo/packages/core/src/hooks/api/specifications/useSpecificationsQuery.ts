import { specifications } from "@core/api/specifications/specificationsQuery";
import { SpcApiSpecificationsFindPostRequest, SpcApiSpecificationsGetRequest, SpcApiSpecificationsSpecificationIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSpecificationsSpecificationsFindPostQuery = (params: SpcApiSpecificationsFindPostRequest) => {
  return useQuery({
    ...specifications.specificationsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useSpecificationsSpecificationsGetQuery = (params: SpcApiSpecificationsGetRequest) => {
  return useQuery({
    ...specifications.specificationsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useSpecificationsSpecificationsSpecificationIdGetQuery = (params: SpcApiSpecificationsSpecificationIdGetRequest) => {
  return useQuery({
    ...specifications.specificationsSpecificationIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
