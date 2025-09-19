import { interportImportMutate } from "@core/api/interport-import/interportImportQuery";
import { DefaultApiInterportImportPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useInterportImportInterportImportPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, DefaultApiInterportImportPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["interportImportPost"],
    mutationFn: (params: DefaultApiInterportImportPostRequest) => interportImportMutate.interportImportPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
