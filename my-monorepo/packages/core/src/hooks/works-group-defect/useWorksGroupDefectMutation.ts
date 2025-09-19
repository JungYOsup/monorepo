import { worksGroupDefectMutate } from "@core/api/works-group-defect/worksGroupDefectQuery";
import { ProductionActionApiWorksGroupDefectPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksGroupDefectWorksGroupDefectPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksGroupDefectPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksGroupDefectPut"],
    mutationFn: (params: ProductionActionApiWorksGroupDefectPutRequest) => worksGroupDefectMutate.worksGroupDefectPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
