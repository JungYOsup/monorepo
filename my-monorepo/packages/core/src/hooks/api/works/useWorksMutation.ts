import { worksMutate } from "@core/api/works/worksQuery";
import { DefaultApiWorksPostRequest, DefaultApiWorksWorkIdDeleteRequest, DefaultApiWorksWorkIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorksPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorksPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksPost"],
    mutationFn: (params: DefaultApiWorksPostRequest) => worksMutate.worksPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useWorksWorksWorkIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorksWorkIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdDelete"],
    mutationFn: (params: DefaultApiWorksWorkIdDeleteRequest) => worksMutate.worksWorkIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useWorksWorksWorkIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiWorksWorkIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdPut"],
    mutationFn: (params: DefaultApiWorksWorkIdPutRequest) => worksMutate.worksWorkIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
