import { inspectionsInspectionIdRecordMutate } from "@core/api/inspections-inspection-id-record/inspectionsInspectionIdRecordQuery";
import { SpcApiInspectionsInspectionIdRecordPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInspectionsInspectionIdRecordInspectionsInspectionIdRecordPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, SpcApiInspectionsInspectionIdRecordPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["inspectionsInspectionIdRecordPut"],
    mutationFn: (params: SpcApiInspectionsInspectionIdRecordPutRequest) => inspectionsInspectionIdRecordMutate.inspectionsInspectionIdRecordPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
