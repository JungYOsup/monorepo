import { downtimeReasonsMutate } from "@core/api/downtime-reasons/downtimeReasonsQuery";
import { DefaultApiDowntimeReasonsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useDowntimeReasonsDowntimeReasonsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiDowntimeReasonsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["downtimeReasonsPost"],
    mutationFn: (params: DefaultApiDowntimeReasonsPostRequest) => downtimeReasonsMutate.downtimeReasonsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
