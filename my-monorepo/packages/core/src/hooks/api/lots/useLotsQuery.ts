import { lots } from "@core/api/lots/lotsQuery";
import { DefaultApiLotsFindPostRequest, DefaultApiLotsGetRequest, DefaultApiLotsLotIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useLotsLotsFindPostQuery = (params: DefaultApiLotsFindPostRequest) => {
  return useQuery({
    ...lots.lotsFindPost(params),
    enabled: !!params,
  });
};

export const useLotsLotsGetQuery = (params: DefaultApiLotsGetRequest) => {
  return useQuery({
    ...lots.lotsGet(params),
    retry: 1,
  });
};

export const useLotsLotsLotIdGetQuery = (params: DefaultApiLotsLotIdGetRequest) => {
  return useQuery({
    ...lots.lotsLotIdGet(params),
    retry: 1,
  });
};
