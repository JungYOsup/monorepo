import { worksWorkIdInputMutate } from "@core/api/works-work-id-input/worksWorkIdInputQuery";
import { ProductionActionApiWorksWorkIdInputPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdInputWorksWorkIdInputPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdInputPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdInputPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdInputPutRequest) => worksWorkIdInputMutate.worksWorkIdInputPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
