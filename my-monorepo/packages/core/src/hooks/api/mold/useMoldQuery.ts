import { mold } from "@core/api/mold/moldQuery";
import { DefaultApiMoldCavitiesMoldCavityIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMoldMoldCavitiesMoldCavityIdGetQuery = (params: DefaultApiMoldCavitiesMoldCavityIdGetRequest) => {
  return useQuery({
    ...mold.moldCavitiesMoldCavityIdGet(params),
    retry: 1,
  });
};
