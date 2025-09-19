import { wmsDiligenceMutate } from "@core/api/wms-diligence/wmsDiligenceQuery";
import { DefaultApiWmsDiligencePostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWmsDiligenceWmsDiligencePostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWmsDiligencePostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["wmsDiligencePost"],
    mutationFn: (params: DefaultApiWmsDiligencePostRequest) => wmsDiligenceMutate.wmsDiligencePost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
