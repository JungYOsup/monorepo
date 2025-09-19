import { partnersMutate } from "@core/api/partners/partnersQuery";
import { MasterApiPartnersPartnerIdDeleteRequest, MasterApiPartnersPartnerIdPutRequest, MasterApiPartnersPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const usePartnersPartnersPartnerIdDeleteMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiPartnersPartnerIdDeleteRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["partnersPartnerIdDelete"],
    mutationFn: (params: MasterApiPartnersPartnerIdDeleteRequest) => partnersMutate.partnersPartnerIdDelete(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePartnersPartnersPartnerIdPutMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiPartnersPartnerIdPutRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["partnersPartnerIdPut"],
    mutationFn: (params: MasterApiPartnersPartnerIdPutRequest) => partnersMutate.partnersPartnerIdPut(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};

export const usePartnersPartnersPostMutation = (options?: Omit<UseMutationOptions<AxiosResponse<any>, unknown, MasterApiPartnersPostRequest, unknown>, 'mutationFn' | 'mutationKey'>) => {
  return useMutation({
    mutationKey: ["partnersPost"],
    mutationFn: (params: MasterApiPartnersPostRequest) => partnersMutate.partnersPost(params).mutationFn(undefined),
    ...(options ?? {}),
  });
};
