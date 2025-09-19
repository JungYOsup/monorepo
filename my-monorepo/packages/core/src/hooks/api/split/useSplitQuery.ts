import { split } from "@core/api/split/splitQuery";
import { DefaultApiSplitLotWorkLogIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSplitSplitLotWorkLogIdGetQuery = (params: DefaultApiSplitLotWorkLogIdGetRequest) => {
  return useQuery({
    ...split.splitLotWorkLogIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
