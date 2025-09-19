import { inspectionsMutate } from "@core/api/inspections/inspectionsQuery";
import { SpcApiInspectionsInspectionIdDeleteRequest, SpcApiInspectionsInspectionIdPutRequest, SpcApiInspectionsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInspectionsInspectionsInspectionIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiInspectionsInspectionIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["inspectionsInspectionIdDelete"],
    mutationFn: (params: SpcApiInspectionsInspectionIdDeleteRequest) => inspectionsMutate.inspectionsInspectionIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useInspectionsInspectionsInspectionIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiInspectionsInspectionIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["inspectionsInspectionIdPut"],
    mutationFn: (params: SpcApiInspectionsInspectionIdPutRequest) => inspectionsMutate.inspectionsInspectionIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useInspectionsInspectionsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiInspectionsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["inspectionsPost"],
    mutationFn: (params: SpcApiInspectionsPostRequest) => inspectionsMutate.inspectionsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
