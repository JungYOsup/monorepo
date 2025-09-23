import { defects } from "@core/api/defects/defectsQuery";
import { DefaultApiDefectsFindPostRequest, DefaultApiDefectsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useDefectsDefectsFindPostQuery = (params: DefaultApiDefectsFindPostRequest) => {
  return useQuery({
    ...defects.defectsFindPost(params),
    enabled: !!params,
  });
};

export const useDefectsDefectsGetQuery = (params: DefaultApiDefectsGetRequest) => {
  return useQuery({
    ...defects.defectsGet(params),
    retry: 1,
  });
};
