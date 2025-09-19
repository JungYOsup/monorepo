import { worksOrderGroupOrderSequenceMutate } from "@core/api/works-order-group-order-sequence/worksOrderGroupOrderSequenceQuery";
import { DefaultApiWorksOrderGroupOrderSequencePutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksOrderGroupOrderSequenceWorksOrderGroupOrderSequencePutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorksOrderGroupOrderSequencePutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksOrderGroupOrderSequencePut"],
    mutationFn: (params: DefaultApiWorksOrderGroupOrderSequencePutRequest) => worksOrderGroupOrderSequenceMutate.worksOrderGroupOrderSequencePut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
