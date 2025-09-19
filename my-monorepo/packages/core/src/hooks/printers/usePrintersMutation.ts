import { printersMutate } from "@core/api/printers/printersQuery";
import { MasterApiPrintersPostRequest, MasterApiPrintersPrinterIdDeleteRequest, MasterApiPrintersPrinterIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePrintersPrintersPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiPrintersPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["printersPost"],
    mutationFn: (params: MasterApiPrintersPostRequest) => printersMutate.printersPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePrintersPrintersPrinterIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiPrintersPrinterIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["printersPrinterIdDelete"],
    mutationFn: (params: MasterApiPrintersPrinterIdDeleteRequest) => printersMutate.printersPrinterIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePrintersPrintersPrinterIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiPrintersPrinterIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["printersPrinterIdPut"],
    mutationFn: (params: MasterApiPrintersPrinterIdPutRequest) => printersMutate.printersPrinterIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
