import { user } from "@core/api/user/userQuery";
import { MasterApiUserDetailViewUserIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useUserUserDetailViewUserIdGetQuery = (params: MasterApiUserDetailViewUserIdGetRequest) => {
  return useQuery({
    ...user.userDetailViewUserIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
