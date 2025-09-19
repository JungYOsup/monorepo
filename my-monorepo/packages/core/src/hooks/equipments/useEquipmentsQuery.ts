import { equipments } from "@core/api/equipments/equipmentsQuery";
import { DefaultApiEquipmentsGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useEquipmentsEquipmentsGetQuery = (params: DefaultApiEquipmentsGetRequest) => {
  return useQuery({
    ...equipments.equipmentsGet(params),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
