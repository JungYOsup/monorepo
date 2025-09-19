import { worksWorkIdDefectMutate } from "@core/api/works-work-id-defect/worksWorkIdDefectQuery";
import { ProductionActionApiWorksWorkIdDefectPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksWorkIdDefectWorksWorkIdDefectPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksWorkIdDefectPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksWorkIdDefectPut"],
    mutationFn: (params: ProductionActionApiWorksWorkIdDefectPutRequest) => worksWorkIdDefectMutate.worksWorkIdDefectPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
