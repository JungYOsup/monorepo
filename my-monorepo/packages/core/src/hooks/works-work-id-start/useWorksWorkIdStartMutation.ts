import { worksWorkIdStartMutate } from "@core/api/works-work-id-start/worksWorkIdStartQuery";
import { ProductionActionApiWorksWorkIdStartPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdStartWorksWorkIdStartPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdStartPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdStartPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdStartPutRequest) => worksWorkIdStartMutate.worksWorkIdStartPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
