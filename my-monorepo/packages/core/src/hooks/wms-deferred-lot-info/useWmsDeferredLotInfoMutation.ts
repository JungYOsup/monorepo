import { wmsDeferredLotInfoMutate } from "@core/api/wms-deferred-lot-info/wmsDeferredLotInfoQuery";
import { DefaultApiWmsDeferredLotInfoPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsDeferredLotInfoWmsDeferredLotInfoPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsDeferredLotInfoPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsDeferredLotInfoPost"],
    mutationFn: (params: DefaultApiWmsDeferredLotInfoPostRequest) => wmsDeferredLotInfoMutate.wmsDeferredLotInfoPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
