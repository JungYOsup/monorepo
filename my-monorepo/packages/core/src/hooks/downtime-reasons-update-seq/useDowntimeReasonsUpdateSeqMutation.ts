import { downtimeReasonsUpdateSeqMutate } from "@core/api/downtime-reasons-update-seq/downtimeReasonsUpdateSeqQuery";
import { DefaultApiDowntimeReasonsUpdateSeqPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useDowntimeReasonsUpdateSeqDowntimeReasonsUpdateSeqPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiDowntimeReasonsUpdateSeqPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["downtimeReasonsUpdateSeqPost"],
    mutationFn: (params: DefaultApiDowntimeReasonsUpdateSeqPostRequest) => downtimeReasonsUpdateSeqMutate.downtimeReasonsUpdateSeqPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
