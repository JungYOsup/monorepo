import { ledgers } from "@core/api/ledgers/ledgersQuery";
import { DefaultApiLedgersFindPostRequest, DefaultApiLedgersGetRequest, DefaultApiLedgersLedgerIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useLedgersLedgersFindPostQuery = (params: DefaultApiLedgersFindPostRequest) => {
  return useQuery({
    ...ledgers.ledgersFindPost(params),
    enabled: !!params,
  });
};

export const useLedgersLedgersGetQuery = (params: DefaultApiLedgersGetRequest) => {
  return useQuery({
    ...ledgers.ledgersGet(params),
    retry: 1,
  });
};

export const useLedgersLedgersLedgerIdGetQuery = (params: DefaultApiLedgersLedgerIdGetRequest) => {
  return useQuery({
    ...ledgers.ledgersLedgerIdGet(params),
    retry: 1,
  });
};
