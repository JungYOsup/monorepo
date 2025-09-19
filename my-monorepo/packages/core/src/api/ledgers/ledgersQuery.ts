import { DefaultInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  DefaultApiLedgersFindPostRequest,
  DefaultApiLedgersGetRequest,
  DefaultApiLedgersLedgerIdGetRequest,
  DefaultApiLedgersLedgerIdDeleteRequest,
  DefaultApiLedgersLedgerIdPutRequest,
  DefaultApiLedgersPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const LEDGERS_QUERY_KEY = "LEDGERS";

export const ledgers = createQueryKeys(LEDGERS_QUERY_KEY, {
  ledgersFindPost: (params: DefaultApiLedgersFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.ledgersFindPost(params),
    };
  },
  ledgersGet: (params: DefaultApiLedgersGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.ledgersGet(params),
    };
  },
  ledgersLedgerIdGet: (params: DefaultApiLedgersLedgerIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => DefaultInstance.ledgersLedgerIdGet(params),
    };
  },
});

export const ledgersMutate = createMutationKeys(LEDGERS_QUERY_KEY, {
  ledgersLedgerIdDelete: (params: DefaultApiLedgersLedgerIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.ledgersLedgerIdDelete(params),
    };
  },
  ledgersLedgerIdPut: (params: DefaultApiLedgersLedgerIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.ledgersLedgerIdPut(params),
    };
  },
  ledgersPost: (params: DefaultApiLedgersPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => DefaultInstance.ledgersPost(params),
    };
  },
});

export const ledgersQueryKeys = mergeQueryKeys(ledgers, ledgersMutate);