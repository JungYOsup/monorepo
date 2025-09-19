import { inspectionsInspectionIdSubmitMutate } from "@core/api/inspections-inspection-id-submit/inspectionsInspectionIdSubmitQuery";
import { SpcApiInspectionsInspectionIdSubmitPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInspectionsInspectionIdSubmitInspectionsInspectionIdSubmitPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiInspectionsInspectionIdSubmitPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["inspectionsInspectionIdSubmitPost"],
    mutationFn: (params: SpcApiInspectionsInspectionIdSubmitPostRequest) => inspectionsInspectionIdSubmitMutate.inspectionsInspectionIdSubmitPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
