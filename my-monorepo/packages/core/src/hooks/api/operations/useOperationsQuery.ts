import { operations } from "@core/api/operations/operationsQuery";
import { DefaultApiOperationsFindPostRequest, DefaultApiOperationsGetRequest, DefaultApiOperationsOperationIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useOperationsOperationsFindPostQuery = (params: DefaultApiOperationsFindPostRequest) => {
  return useQuery({
    ...operations.operationsFindPost(params),
    enabled: !!params,
  });
};

export const useOperationsOperationsGetQuery = (params: DefaultApiOperationsGetRequest) => {
  return useQuery({
    ...operations.operationsGet(params),
    retry: 1,
  });
};

export const useOperationsOperationsOperationIdGetQuery = (params: DefaultApiOperationsOperationIdGetRequest) => {
  return useQuery({
    ...operations.operationsOperationIdGet(params),
    retry: 1,
  });
};
