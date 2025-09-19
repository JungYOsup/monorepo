import { worksWorkIdBulkConsumeSubsidiaryMutate } from "@core/api/works-work-id-bulk-consume-subsidiary/worksWorkIdBulkConsumeSubsidiaryQuery";
import { ProductionActionApiWorksWorkIdBulkConsumeSubsidiaryPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdBulkConsumeSubsidiaryWorksWorkIdBulkConsumeSubsidiaryPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdBulkConsumeSubsidiaryPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdBulkConsumeSubsidiaryPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdBulkConsumeSubsidiaryPutRequest) => worksWorkIdBulkConsumeSubsidiaryMutate.worksWorkIdBulkConsumeSubsidiaryPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
