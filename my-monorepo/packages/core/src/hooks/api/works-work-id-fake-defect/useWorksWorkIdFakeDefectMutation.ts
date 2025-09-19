import { worksWorkIdFakeDefectMutate } from "@core/api/works-work-id-fake-defect/worksWorkIdFakeDefectQuery";
import { ProductionActionApiWorksWorkIdFakeDefectPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdFakeDefectWorksWorkIdFakeDefectPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdFakeDefectPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdFakeDefectPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdFakeDefectPutRequest) => worksWorkIdFakeDefectMutate.worksWorkIdFakeDefectPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
