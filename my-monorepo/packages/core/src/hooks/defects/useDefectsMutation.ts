import { defectsMutate } from "@core/api/defects/defectsQuery";
import { DefaultApiDefectsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useDefectsDefectsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiDefectsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["defectsPost"],
    mutationFn: (params: DefaultApiDefectsPostRequest) => defectsMutate.defectsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
