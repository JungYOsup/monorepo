import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiPrintersFindPostRequest,
  MasterApiPrintersGetRequest,
  MasterApiPrintersPrinterIdGetRequest,
  MasterApiPrintersPostRequest,
  MasterApiPrintersPrinterIdDeleteRequest,
  MasterApiPrintersPrinterIdPutRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const PRINTERS_QUERY_KEY = "PRINTERS";

export const printers = createQueryKeys(PRINTERS_QUERY_KEY, {
  printersFindPost: (params: MasterApiPrintersFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.printersFindPost(params),
    };
  },
  printersGet: (params: MasterApiPrintersGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.printersGet(params),
    };
  },
  printersPrinterIdGet: (params: MasterApiPrintersPrinterIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.printersPrinterIdGet(params),
    };
  },
});

export const printersMutate = createMutationKeys(PRINTERS_QUERY_KEY, {
  printersPost: (params: MasterApiPrintersPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.printersPost(params),
    };
  },
  printersPrinterIdDelete: (params: MasterApiPrintersPrinterIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.printersPrinterIdDelete(params),
    };
  },
  printersPrinterIdPut: (params: MasterApiPrintersPrinterIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.printersPrinterIdPut(params),
    };
  },
});

export const printersQueryKeys = mergeQueryKeys(printers, printersMutate);