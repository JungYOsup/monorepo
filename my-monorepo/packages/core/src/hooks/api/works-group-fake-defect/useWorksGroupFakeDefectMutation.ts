import { worksGroupFakeDefectMutate } from "@core/api/works-group-fake-defect/worksGroupFakeDefectQuery";
import { ProductionActionApiWorksGroupFakeDefectPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksGroupFakeDefectWorksGroupFakeDefectPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksGroupFakeDefectPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksGroupFakeDefectPut"],
    mutationFn: (params: ProductionActionApiWorksGroupFakeDefectPutRequest) => worksGroupFakeDefectMutate.worksGroupFakeDefectPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
