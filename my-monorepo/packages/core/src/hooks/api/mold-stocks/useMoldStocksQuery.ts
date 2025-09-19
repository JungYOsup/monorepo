import { moldStocks } from "@core/api/mold-stocks/moldStocksQuery";
import { MasterApiMoldStocksFindPostRequest, MasterApiMoldStocksGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useMoldStocksMoldStocksFindPostQuery = (params: MasterApiMoldStocksFindPostRequest) => {
  return useQuery({
    ...moldStocks.moldStocksFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useMoldStocksMoldStocksGetQuery = (params: MasterApiMoldStocksGetRequest) => {
  return useQuery({
    ...moldStocks.moldStocksGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
