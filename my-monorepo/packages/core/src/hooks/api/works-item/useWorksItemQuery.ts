import { worksItem } from "@core/api/works-item/worksItemQuery";
import { DefaultApiWorksItemFindPostRequest, DefaultApiWorksItemGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWorksItemWorksItemFindPostQuery = (params: DefaultApiWorksItemFindPostRequest) => {
  return useQuery({
    ...worksItem.worksItemFindPost(params),
    enabled: !!params,
  });
};

export const useWorksItemWorksItemGetQuery = (params: DefaultApiWorksItemGetRequest) => {
  return useQuery({
    ...worksItem.worksItemGet(params),
    retry: 1,
  });
};
