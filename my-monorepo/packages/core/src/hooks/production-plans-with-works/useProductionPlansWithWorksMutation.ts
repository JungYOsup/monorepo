import { productionPlansWithWorksMutate } from "@core/api/production-plans-with-works/productionPlansWithWorksQuery";
import { ProductionActionApiProductionPlansWithWorksPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useProductionPlansWithWorksProductionPlansWithWorksPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, ProductionActionApiProductionPlansWithWorksPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["productionPlansWithWorksPost"],
    mutationFn: (params: ProductionActionApiProductionPlansWithWorksPostRequest) => productionPlansWithWorksMutate.productionPlansWithWorksPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
