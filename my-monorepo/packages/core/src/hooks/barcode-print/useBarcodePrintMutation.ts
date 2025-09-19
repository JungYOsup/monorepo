import { barcodePrintMutate } from "@core/api/barcode-print/barcodePrintQuery";
import { DefaultApiBarcodePrintPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useBarcodePrintBarcodePrintPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiBarcodePrintPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["barcodePrintPost"],
    mutationFn: (params: DefaultApiBarcodePrintPostRequest) => barcodePrintMutate.barcodePrintPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
