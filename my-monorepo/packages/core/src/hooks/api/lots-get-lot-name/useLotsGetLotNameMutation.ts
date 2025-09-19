import { lotsGetLotNameMutate } from "@core/api/lots-get-lot-name/lotsGetLotNameQuery";
import { DefaultApiLotsGetLotNamePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLotsGetLotNameLotsGetLotNamePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiLotsGetLotNamePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["lotsGetLotNamePost"],
    mutationFn: (params: DefaultApiLotsGetLotNamePostRequest) => lotsGetLotNameMutate.lotsGetLotNamePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
