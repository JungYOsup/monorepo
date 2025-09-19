import { incomingMutate } from "@core/api/incoming/incomingQuery";
import { SpcApiIncomingInspectionsIncomingInspectionIdDeleteRequest, SpcApiIncomingInspectionsIncomingInspectionIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useIncomingIncomingInspectionsIncomingInspectionIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiIncomingInspectionsIncomingInspectionIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["incomingInspectionsIncomingInspectionIdDelete"],
    mutationFn: (params: SpcApiIncomingInspectionsIncomingInspectionIdDeleteRequest) => incomingMutate.incomingInspectionsIncomingInspectionIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useIncomingIncomingInspectionsIncomingInspectionIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiIncomingInspectionsIncomingInspectionIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["incomingInspectionsIncomingInspectionIdPut"],
    mutationFn: (params: SpcApiIncomingInspectionsIncomingInspectionIdPutRequest) => incomingMutate.incomingInspectionsIncomingInspectionIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
