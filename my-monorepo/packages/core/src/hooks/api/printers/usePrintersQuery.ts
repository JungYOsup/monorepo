import { printers } from "@core/api/printers/printersQuery";
import { MasterApiPrintersFindPostRequest, MasterApiPrintersGetRequest, MasterApiPrintersPrinterIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePrintersPrintersFindPostQuery = (params: MasterApiPrintersFindPostRequest) => {
  return useQuery({
    ...printers.printersFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const usePrintersPrintersGetQuery = (params: MasterApiPrintersGetRequest) => {
  return useQuery({
    ...printers.printersGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const usePrintersPrintersPrinterIdGetQuery = (params: MasterApiPrintersPrinterIdGetRequest) => {
  return useQuery({
    ...printers.printersPrinterIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
