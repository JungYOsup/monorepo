import { moldCavities } from "@core/api/mold-cavities/moldCavitiesQuery";
import { DefaultApiMoldCavitiesFindPostRequest, DefaultApiMoldCavitiesGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMoldCavitiesMoldCavitiesFindPostQuery = (params: DefaultApiMoldCavitiesFindPostRequest) => {
  return useQuery({
    ...moldCavities.moldCavitiesFindPost(params),
    enabled: !!params,
  });
};

export const useMoldCavitiesMoldCavitiesGetQuery = (params: DefaultApiMoldCavitiesGetRequest) => {
  return useQuery({
    ...moldCavities.moldCavitiesGet(params),
    retry: 1,
  });
};
