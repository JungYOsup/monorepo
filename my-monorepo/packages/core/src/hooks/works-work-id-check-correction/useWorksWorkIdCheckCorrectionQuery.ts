import { worksWorkIdCheckCorrection } from "@core/api/works-work-id-check-correction/worksWorkIdCheckCorrectionQuery";
import { ProductionActionApiWorksWorkIdCheckCorrectionGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorksWorkIdCheckCorrectionWorksWorkIdCheckCorrectionGetQuery = (params: ProductionActionApiWorksWorkIdCheckCorrectionGetRequest) => {
  return useQuery({
    ...worksWorkIdCheckCorrection.worksWorkIdCheckCorrectionGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
