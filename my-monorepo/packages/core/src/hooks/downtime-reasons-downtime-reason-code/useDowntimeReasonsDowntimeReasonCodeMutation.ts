import { downtimeReasonsDowntimeReasonCodeMutate } from "@core/api/downtime-reasons-downtime-reason-code/downtimeReasonsDowntimeReasonCodeQuery";
import { DefaultApiDowntimeReasonsDowntimeReasonCodeDeleteRequest, DefaultApiDowntimeReasonsDowntimeReasonCodePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useDowntimeReasonsDowntimeReasonCodeDowntimeReasonsDowntimeReasonCodeDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiDowntimeReasonsDowntimeReasonCodeDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["downtimeReasonsDowntimeReasonCodeDelete"],
    mutationFn: (params: DefaultApiDowntimeReasonsDowntimeReasonCodeDeleteRequest) => downtimeReasonsDowntimeReasonCodeMutate.downtimeReasonsDowntimeReasonCodeDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useDowntimeReasonsDowntimeReasonCodeDowntimeReasonsDowntimeReasonCodePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiDowntimeReasonsDowntimeReasonCodePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["downtimeReasonsDowntimeReasonCodePut"],
    mutationFn: (params: DefaultApiDowntimeReasonsDowntimeReasonCodePutRequest) => downtimeReasonsDowntimeReasonCodeMutate.downtimeReasonsDowntimeReasonCodePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
