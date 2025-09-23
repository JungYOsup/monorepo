import { specifications } from "@core/api/specifications/specificationsQuery";
import { SpcApiSpecificationsFindPostRequest, SpcApiSpecificationsGetRequest, SpcApiSpecificationsSpecificationIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSpecificationsSpecificationsFindPostQuery = (params: SpcApiSpecificationsFindPostRequest) => {
  return useQuery({
    ...specifications.specificationsFindPost(params),
    enabled: !!params,
  });
};

export const useSpecificationsSpecificationsGetQuery = (params: SpcApiSpecificationsGetRequest) => {
  return useQuery({
    ...specifications.specificationsGet(params),
    retry: 1,
  });
};

export const useSpecificationsSpecificationsSpecificationIdGetQuery = (params: SpcApiSpecificationsSpecificationIdGetRequest) => {
  return useQuery({
    ...specifications.specificationsSpecificationIdGet(params),
    retry: 1,
  });
};
