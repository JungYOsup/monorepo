import { wmsOutsourceInventoryLogMutate } from "@core/api/wms-outsource-inventory-log/wmsOutsourceInventoryLogQuery";
import { DefaultApiWmsOutsourceInventoryLogPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsOutsourceInventoryLogWmsOutsourceInventoryLogPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsOutsourceInventoryLogPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsOutsourceInventoryLogPost"],
    mutationFn: (params: DefaultApiWmsOutsourceInventoryLogPostRequest) => wmsOutsourceInventoryLogMutate.wmsOutsourceInventoryLogPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
