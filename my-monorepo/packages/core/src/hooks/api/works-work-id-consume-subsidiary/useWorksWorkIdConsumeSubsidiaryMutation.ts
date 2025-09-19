import { worksWorkIdConsumeSubsidiaryMutate } from "@core/api/works-work-id-consume-subsidiary/worksWorkIdConsumeSubsidiaryQuery";
import { ProductionActionApiWorksWorkIdConsumeSubsidiaryPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdConsumeSubsidiaryWorksWorkIdConsumeSubsidiaryPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdConsumeSubsidiaryPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdConsumeSubsidiaryPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdConsumeSubsidiaryPutRequest) => worksWorkIdConsumeSubsidiaryMutate.worksWorkIdConsumeSubsidiaryPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
