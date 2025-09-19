import { usersMutate } from "@core/api/users/usersQuery";
import { MasterApiUsersPostRequest, MasterApiUsersUserIdDeleteRequest, MasterApiUsersUserIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useUsersUsersPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiUsersPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["usersPost"],
    mutationFn: (params: MasterApiUsersPostRequest) => usersMutate.usersPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useUsersUsersUserIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiUsersUserIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["usersUserIdDelete"],
    mutationFn: (params: MasterApiUsersUserIdDeleteRequest) => usersMutate.usersUserIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const useUsersUsersUserIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiUsersUserIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["usersUserIdPut"],
    mutationFn: (params: MasterApiUsersUserIdPutRequest) => usersMutate.usersUserIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
