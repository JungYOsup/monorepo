import { MasterInstance } from "@core/instance/axios";
import {
  createQueryKeys,
  createMutationKeys,
  mergeQueryKeys
} from "@lukemorales/query-key-factory";
import {
  MasterApiGradesFindPostRequest,
  MasterApiGradesGetRequest,
  MasterApiGradesGradeIdGetRequest,
  MasterApiGradesGradeIdDeleteRequest,
  MasterApiGradesGradeIdPutRequest,
  MasterApiGradesPostRequest
} from "@sizlcorp/sizl-api-document/dist/models";
import { AxiosResponse } from "axios";

export const GRADES_QUERY_KEY = "GRADES";

export const grades = createQueryKeys(GRADES_QUERY_KEY, {
  gradesFindPost: (params: MasterApiGradesFindPostRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.gradesFindPost(params),
    };
  },
  gradesGet: (params: MasterApiGradesGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.gradesGet(params),
    };
  },
  gradesGradeIdGet: (params: MasterApiGradesGradeIdGetRequest) => {
    return {
      queryKey: [params],
      queryFn: () => MasterInstance.gradesGradeIdGet(params),
    };
  },
});

export const gradesMutate = createMutationKeys(GRADES_QUERY_KEY, {
  gradesGradeIdDelete: (params: MasterApiGradesGradeIdDeleteRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.gradesGradeIdDelete(params),
    };
  },
  gradesGradeIdPut: (params: MasterApiGradesGradeIdPutRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.gradesGradeIdPut(params),
    };
  },
  gradesPost: (params: MasterApiGradesPostRequest) => {
    return {
      mutationKey: [params],
      mutationFn: () => MasterInstance.gradesPost(params),
    };
  },
});

export const gradesQueryKeys = mergeQueryKeys(grades, gradesMutate);