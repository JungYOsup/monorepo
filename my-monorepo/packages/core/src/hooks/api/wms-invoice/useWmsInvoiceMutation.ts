import { wmsInvoiceMutate } from "@core/api/wms-invoice/wmsInvoiceQuery";
import { DefaultApiWmsInvoicePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsInvoiceWmsInvoicePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsInvoicePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsInvoicePost"],
    mutationFn: (params: DefaultApiWmsInvoicePostRequest) => wmsInvoiceMutate.wmsInvoicePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
