import { defectsDefectCode } from "@core/api/defects-defect-code/defectsDefectCodeQuery";
import { DefaultApiDefectsDefectCodeGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useDefectsDefectCodeDefectsDefectCodeGetQuery = (params: DefaultApiDefectsDefectCodeGetRequest) => {
  return useQuery({
    ...defectsDefectCode.defectsDefectCodeGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
