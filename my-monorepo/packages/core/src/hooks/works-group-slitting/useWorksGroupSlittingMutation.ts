import { worksGroupSlittingMutate } from "@core/api/works-group-slitting/worksGroupSlittingQuery";
import { ProductionActionApiWorksGroupSlittingPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksGroupSlittingWorksGroupSlittingPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksGroupSlittingPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksGroupSlittingPut"],
    mutationFn: (params: ProductionActionApiWorksGroupSlittingPutRequest) => worksGroupSlittingMutate.worksGroupSlittingPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
