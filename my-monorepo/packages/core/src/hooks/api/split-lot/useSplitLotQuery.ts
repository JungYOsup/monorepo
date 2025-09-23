import { splitLot } from "@core/api/split-lot/splitLotQuery";
import { DefaultApiSplitLotFindPostRequest, DefaultApiSplitLotGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useSplitLotSplitLotFindPostQuery = (params: DefaultApiSplitLotFindPostRequest) => {
  return useQuery({
    ...splitLot.splitLotFindPost(params),
    enabled: !!params,
  });
};

export const useSplitLotSplitLotGetQuery = (params: DefaultApiSplitLotGetRequest) => {
  return useQuery({
    ...splitLot.splitLotGet(params),
    retry: 1,
  });
};
