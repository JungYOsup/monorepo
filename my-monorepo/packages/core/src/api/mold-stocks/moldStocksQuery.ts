import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiMoldStocksFindPostRequest,
  MasterApiMoldStocksGetRequest,
  MasterApiMoldStocksPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const MOLDSTOCKS_QUERY_KEY = "MOLDSTOCKS";

export const moldStocks = createQueryKeys(MOLDSTOCKS_QUERY_KEY, {
  moldStocksFindPost: (params: MasterApiMoldStocksFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.moldStocksFindPost(params),
    };
  },
  moldStocksGet: (params: MasterApiMoldStocksGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.moldStocksGet(params),
    };
  },
});

export const moldStocksMutate = createMutationKeys(MOLDSTOCKS_QUERY_KEY, {
  moldStocksPost: (params: MasterApiMoldStocksPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.moldStocksPost(params),
    };
  },
});

export const moldStocksQueryKeys = mergeQueryKeys(moldStocks, moldStocksMutate);