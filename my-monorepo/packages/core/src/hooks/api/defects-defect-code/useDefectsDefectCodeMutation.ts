import { defectsDefectCodeMutate } from "@core/api/defects-defect-code/defectsDefectCodeQuery";
import { DefaultApiDefectsDefectCodeDeleteRequest, DefaultApiDefectsDefectCodePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useDefectsDefectCodeDefectsDefectCodeDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiDefectsDefectCodeDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["defectsDefectCodeDelete"],
    mutationFn: (params: DefaultApiDefectsDefectCodeDeleteRequest) => defectsDefectCodeMutate.defectsDefectCodeDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useDefectsDefectCodeDefectsDefectCodePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiDefectsDefectCodePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["defectsDefectCodePut"],
    mutationFn: (params: DefaultApiDefectsDefectCodePutRequest) => defectsDefectCodeMutate.defectsDefectCodePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
