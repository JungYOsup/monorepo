import { worksWorkIdRecycleScrapMutate } from "@core/api/works-work-id-recycle-scrap/worksWorkIdRecycleScrapQuery";
import { ProductionActionApiWorksWorkIdRecycleScrapPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdRecycleScrapWorksWorkIdRecycleScrapPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdRecycleScrapPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdRecycleScrapPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdRecycleScrapPutRequest) => worksWorkIdRecycleScrapMutate.worksWorkIdRecycleScrapPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
