import { partners } from "@core/api/partners/partnersQuery";
import { MasterApiPartnersFindPostRequest, MasterApiPartnersGetRequest, MasterApiPartnersPartnerIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePartnersPartnersFindPostQuery = (params: MasterApiPartnersFindPostRequest) => {
  return useQuery({
    ...partners.partnersFindPost(params),
    staleTime: 1000 * 60 * 5,
    enabled: !!params,
  });
};

export const usePartnersPartnersGetQuery = (params: MasterApiPartnersGetRequest) => {
  return useQuery({
    ...partners.partnersGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const usePartnersPartnersPartnerIdGetQuery = (params: MasterApiPartnersPartnerIdGetRequest) => {
  return useQuery({
    ...partners.partnersPartnerIdGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
