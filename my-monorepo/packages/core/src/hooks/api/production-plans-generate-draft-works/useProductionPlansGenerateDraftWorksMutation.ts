import { productionPlansGenerateDraftWorksMutate } from "@core/api/production-plans-generate-draft-works/productionPlansGenerateDraftWorksQuery";
import { ProductionActionApiProductionPlansGenerateDraftWorksPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useProductionPlansGenerateDraftWorksProductionPlansGenerateDraftWorksPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiProductionPlansGenerateDraftWorksPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["productionPlansGenerateDraftWorksPost"],
    mutationFn: (params: ProductionActionApiProductionPlansGenerateDraftWorksPostRequest) => productionPlansGenerateDraftWorksMutate.productionPlansGenerateDraftWorksPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
