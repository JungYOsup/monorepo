import { worksWorkIdEndMutate } from "@core/api/works-work-id-end/worksWorkIdEndQuery";
import { ProductionActionApiWorksWorkIdEndPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdEndWorksWorkIdEndPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdEndPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdEndPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdEndPutRequest) => worksWorkIdEndMutate.worksWorkIdEndPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
