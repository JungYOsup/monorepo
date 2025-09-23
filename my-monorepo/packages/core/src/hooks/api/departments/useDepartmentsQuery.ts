import { departments } from "@core/api/departments/departmentsQuery";
import { MasterApiDepartmentsDepartmentIdGetRequest, MasterApiDepartmentsFindPostRequest, MasterApiDepartmentsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useDepartmentsDepartmentsDepartmentIdGetQuery = (params: MasterApiDepartmentsDepartmentIdGetRequest) => {
  return useQuery({
    ...departments.departmentsDepartmentIdGet(params),
    retry: 1,
  });
};

export const useDepartmentsDepartmentsFindPostQuery = (params: MasterApiDepartmentsFindPostRequest) => {
  return useQuery({
    ...departments.departmentsFindPost(params),
    enabled: !!params,
  });
};

export const useDepartmentsDepartmentsGetQuery = (params: MasterApiDepartmentsGetRequest) => {
  return useQuery({
    ...departments.departmentsGet(params),
    retry: 1,
  });
};
