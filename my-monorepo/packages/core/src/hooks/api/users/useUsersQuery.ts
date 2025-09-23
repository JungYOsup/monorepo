import { users } from "@core/api/users/usersQuery";
import { MasterApiUsersFindPostRequest, MasterApiUsersGetRequest, MasterApiUsersUserIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useUsersUsersFindPostQuery = (params: MasterApiUsersFindPostRequest) => {
  return useQuery({
    ...users.usersFindPost(params),
    enabled: !!params,
  });
};

export const useUsersUsersGetQuery = (params: MasterApiUsersGetRequest) => {
  return useQuery({
    ...users.usersGet(params),
    retry: 1,
  });
};

export const useUsersUsersUserIdGetQuery = (params: MasterApiUsersUserIdGetRequest) => {
  return useQuery({
    ...users.usersUserIdGet(params),
    retry: 1,
  });
};
