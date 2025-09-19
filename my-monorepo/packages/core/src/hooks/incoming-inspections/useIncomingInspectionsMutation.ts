import { incomingInspectionsMutate } from "@core/api/incoming-inspections/incomingInspectionsQuery";
import { SpcApiIncomingInspectionsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useIncomingInspectionsIncomingInspectionsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiIncomingInspectionsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["incomingInspectionsPost"],
    mutationFn: (params: SpcApiIncomingInspectionsPostRequest) => incomingInspectionsMutate.incomingInspectionsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
