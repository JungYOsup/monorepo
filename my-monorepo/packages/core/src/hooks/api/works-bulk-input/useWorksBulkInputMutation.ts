import { worksBulkInputMutate } from "@core/api/works-bulk-input/worksBulkInputQuery";
import { ProductionActionApiWorksBulkInputPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksBulkInputWorksBulkInputPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksBulkInputPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksBulkInputPut"],
    mutationFn: (params: ProductionActionApiWorksBulkInputPutRequest) => worksBulkInputMutate.worksBulkInputPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
