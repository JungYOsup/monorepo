import { defects } from "@core/api/defects/defectsQuery";
import { DefaultApiDefectsFindPostRequest, DefaultApiDefectsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useDefectsDefectsFindPostQuery = (params: DefaultApiDefectsFindPostRequest) => {
  return useQuery({
    ...defects.defectsFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useDefectsDefectsGetQuery = (params: DefaultApiDefectsGetRequest) => {
  return useQuery({
    ...defects.defectsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
