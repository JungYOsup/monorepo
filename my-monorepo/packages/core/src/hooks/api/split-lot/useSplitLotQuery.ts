import { splitLot } from "@core/api/split-lot/splitLotQuery";
import { DefaultApiSplitLotFindPostRequest, DefaultApiSplitLotGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSplitLotSplitLotFindPostQuery = (params: DefaultApiSplitLotFindPostRequest) => {
  return useQuery({
    ...splitLot.splitLotFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useSplitLotSplitLotGetQuery = (params: DefaultApiSplitLotGetRequest) => {
  return useQuery({
    ...splitLot.splitLotGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
