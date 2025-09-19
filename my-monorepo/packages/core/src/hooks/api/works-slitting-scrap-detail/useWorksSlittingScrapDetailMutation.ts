import { worksSlittingScrapDetailMutate } from "@core/api/works-slitting-scrap-detail/worksSlittingScrapDetailQuery";
import { ProductionActionApiWorksSlittingScrapDetailPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useWorksSlittingScrapDetailWorksSlittingScrapDetailPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiWorksSlittingScrapDetailPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["worksSlittingScrapDetailPost"],
    mutationFn: (params: ProductionActionApiWorksSlittingScrapDetailPostRequest) => worksSlittingScrapDetailMutate.worksSlittingScrapDetailPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
