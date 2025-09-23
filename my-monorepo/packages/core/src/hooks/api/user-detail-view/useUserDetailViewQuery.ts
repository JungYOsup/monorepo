import { userDetailView } from "@core/api/user-detail-view/userDetailViewQuery";
import { MasterApiUserDetailViewFindPostRequest, MasterApiUserDetailViewGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useUserDetailViewUserDetailViewFindPostQuery = (params: MasterApiUserDetailViewFindPostRequest) => {
  return useQuery({
    ...userDetailView.userDetailViewFindPost(params),
    enabled: !!params,
  });
};

export const useUserDetailViewUserDetailViewGetQuery = (params: MasterApiUserDetailViewGetRequest) => {
  return useQuery({
    ...userDetailView.userDetailViewGet(params),
    retry: 1,
  });
};
