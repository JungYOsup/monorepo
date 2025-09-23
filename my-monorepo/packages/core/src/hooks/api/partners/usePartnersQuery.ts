import { partners } from "@core/api/partners/partnersQuery";
import { MasterApiPartnersFindPostRequest, MasterApiPartnersGetRequest, MasterApiPartnersPartnerIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const usePartnersPartnersFindPostQuery = (params: MasterApiPartnersFindPostRequest) => {
  return useQuery({
    ...partners.partnersFindPost(params),
    enabled: !!params,
  });
};

export const usePartnersPartnersGetQuery = (params: MasterApiPartnersGetRequest) => {
  return useQuery({
    ...partners.partnersGet(params),
    retry: 1,
  });
};

export const usePartnersPartnersPartnerIdGetQuery = (params: MasterApiPartnersPartnerIdGetRequest) => {
  return useQuery({
    ...partners.partnersPartnerIdGet(params),
    retry: 1,
  });
};
