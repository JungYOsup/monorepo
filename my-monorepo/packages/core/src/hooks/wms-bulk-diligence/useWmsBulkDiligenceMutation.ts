import { wmsBulkDiligenceMutate } from "@core/api/wms-bulk-diligence/wmsBulkDiligenceQuery";
import { DefaultApiWmsBulkDiligencePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsBulkDiligenceWmsBulkDiligencePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsBulkDiligencePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsBulkDiligencePut"],
    mutationFn: (params: DefaultApiWmsBulkDiligencePutRequest) => wmsBulkDiligenceMutate.wmsBulkDiligencePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
