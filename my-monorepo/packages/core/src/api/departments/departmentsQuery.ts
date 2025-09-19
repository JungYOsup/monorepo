import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiDepartmentsDepartmentIdGetRequest,
  MasterApiDepartmentsFindPostRequest,
  MasterApiDepartmentsGetRequest,
  MasterApiDepartmentsDepartmentIdDeleteRequest,
  MasterApiDepartmentsDepartmentIdPutRequest,
  MasterApiDepartmentsPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const DEPARTMENTS_QUERY_KEY = "DEPARTMENTS";

export const departments = createQueryKeys(DEPARTMENTS_QUERY_KEY, {
  departmentsDepartmentIdGet: (params: MasterApiDepartmentsDepartmentIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.departmentsDepartmentIdGet(params),
    };
  },
  departmentsFindPost: (params: MasterApiDepartmentsFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.departmentsFindPost(params),
    };
  },
  departmentsGet: (params: MasterApiDepartmentsGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.departmentsGet(params),
    };
  },
});

export const departmentsMutate = createMutationKeys(DEPARTMENTS_QUERY_KEY, {
  departmentsDepartmentIdDelete: (params: MasterApiDepartmentsDepartmentIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.departmentsDepartmentIdDelete(params),
    };
  },
  departmentsDepartmentIdPut: (params: MasterApiDepartmentsDepartmentIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.departmentsDepartmentIdPut(params),
    };
  },
  departmentsPost: (params: MasterApiDepartmentsPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.departmentsPost(params),
    };
  },
});

export const departmentsQueryKeys = mergeQueryKeys(departments, departmentsMutate);