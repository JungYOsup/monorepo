import { grades } from "@core/api/grades/gradesQuery";
import { MasterApiGradesFindPostRequest, MasterApiGradesGetRequest, MasterApiGradesGradeIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useGradesGradesFindPostQuery = (params: MasterApiGradesFindPostRequest) => {
  return useQuery({
    ...grades.gradesFindPost(params),
    enabled: !!params,
  });
};

export const useGradesGradesGetQuery = (params: MasterApiGradesGetRequest) => {
  return useQuery({
    ...grades.gradesGet(params),
    retry: 1,
  });
};

export const useGradesGradesGradeIdGetQuery = (params: MasterApiGradesGradeIdGetRequest) => {
  return useQuery({
    ...grades.gradesGradeIdGet(params),
    retry: 1,
  });
};
