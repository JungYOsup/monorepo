import { worksWorkIdReworkMutate } from "@core/api/works-work-id-rework/worksWorkIdReworkQuery";
import { ProductionActionApiWorksWorkIdReworkPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdReworkWorksWorkIdReworkPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdReworkPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdReworkPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdReworkPutRequest) => worksWorkIdReworkMutate.worksWorkIdReworkPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
