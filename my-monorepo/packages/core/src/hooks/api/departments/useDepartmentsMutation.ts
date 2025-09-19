import { departmentsMutate } from "@core/api/departments/departmentsQuery";
import { MasterApiDepartmentsDepartmentIdDeleteRequest, MasterApiDepartmentsDepartmentIdPutRequest, MasterApiDepartmentsPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useDepartmentsDepartmentsDepartmentIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiDepartmentsDepartmentIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["departmentsDepartmentIdDelete"],
    mutationFn: (params: MasterApiDepartmentsDepartmentIdDeleteRequest) => departmentsMutate.departmentsDepartmentIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useDepartmentsDepartmentsDepartmentIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiDepartmentsDepartmentIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["departmentsDepartmentIdPut"],
    mutationFn: (params: MasterApiDepartmentsDepartmentIdPutRequest) => departmentsMutate.departmentsDepartmentIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useDepartmentsDepartmentsPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiDepartmentsPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["departmentsPost"],
    mutationFn: (params: MasterApiDepartmentsPostRequest) => departmentsMutate.departmentsPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
