import { ledgersMutate } from "@core/api/ledgers/ledgersQuery";
import { DefaultApiLedgersLedgerIdDeleteRequest, DefaultApiLedgersLedgerIdPutRequest, DefaultApiLedgersPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLedgersLedgersLedgerIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLedgersLedgerIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["ledgersLedgerIdDelete"],
    mutationFn: (params: DefaultApiLedgersLedgerIdDeleteRequest) => ledgersMutate.ledgersLedgerIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useLedgersLedgersLedgerIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLedgersLedgerIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["ledgersLedgerIdPut"],
    mutationFn: (params: DefaultApiLedgersLedgerIdPutRequest) => ledgersMutate.ledgersLedgerIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useLedgersLedgersPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLedgersPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["ledgersPost"],
    mutationFn: (params: DefaultApiLedgersPostRequest) => ledgersMutate.ledgersPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
