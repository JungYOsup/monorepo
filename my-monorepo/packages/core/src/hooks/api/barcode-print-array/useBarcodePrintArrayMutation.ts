import { barcodePrintArrayMutate } from "@core/api/barcode-print-array/barcodePrintArrayQuery";
import { DefaultApiBarcodePrintArrayPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useBarcodePrintArrayBarcodePrintArrayPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiBarcodePrintArrayPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["barcodePrintArrayPost"],
    mutationFn: (params: DefaultApiBarcodePrintArrayPostRequest) => barcodePrintArrayMutate.barcodePrintArrayPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
