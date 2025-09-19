import { gradesMutate } from "@core/api/grades/gradesQuery";
import { MasterApiGradesGradeIdDeleteRequest, MasterApiGradesGradeIdPutRequest, MasterApiGradesPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGradesGradesGradeIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiGradesGradeIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["gradesGradeIdDelete"],
    mutationFn: (params: MasterApiGradesGradeIdDeleteRequest) => gradesMutate.gradesGradeIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useGradesGradesGradeIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiGradesGradeIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["gradesGradeIdPut"],
    mutationFn: (params: MasterApiGradesGradeIdPutRequest) => gradesMutate.gradesGradeIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useGradesGradesPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiGradesPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["gradesPost"],
    mutationFn: (params: MasterApiGradesPostRequest) => gradesMutate.gradesPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
