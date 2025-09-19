import { worksWorkIdResetAccQuantityMutate } from "@core/api/works-work-id-reset-acc-quantity/worksWorkIdResetAccQuantityQuery";
import { ProductionActionApiWorksWorkIdResetAccQuantityPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdResetAccQuantityWorksWorkIdResetAccQuantityPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdResetAccQuantityPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdResetAccQuantityPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdResetAccQuantityPutRequest) => worksWorkIdResetAccQuantityMutate.worksWorkIdResetAccQuantityPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
