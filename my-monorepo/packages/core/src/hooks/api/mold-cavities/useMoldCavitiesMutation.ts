import { moldCavitiesMutate } from "@core/api/mold-cavities/moldCavitiesQuery";
import { DefaultApiMoldCavitiesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useMoldCavitiesMoldCavitiesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiMoldCavitiesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["moldCavitiesPost"],
    mutationFn: (params: DefaultApiMoldCavitiesPostRequest) => moldCavitiesMutate.moldCavitiesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
