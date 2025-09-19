import { lotsBulkMutate } from "@core/api/lots-bulk/lotsBulkQuery";
import { DefaultApiLotsBulkDeleteRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLotsBulkLotsBulkDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLotsBulkDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["lotsBulkDelete"],
    mutationFn: (params: DefaultApiLotsBulkDeleteRequest) => lotsBulkMutate.lotsBulkDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
