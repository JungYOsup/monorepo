import { userDetailView } from "@core/api/user-detail-view/userDetailViewQuery";
import { MasterApiUserDetailViewFindPostRequest, MasterApiUserDetailViewGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useUserDetailViewUserDetailViewFindPostQuery = (params: MasterApiUserDetailViewFindPostRequest) => {
  return useQuery({
    ...userDetailView.userDetailViewFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const useUserDetailViewUserDetailViewGetQuery = (params: MasterApiUserDetailViewGetRequest) => {
  return useQuery({
    ...userDetailView.userDetailViewGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
