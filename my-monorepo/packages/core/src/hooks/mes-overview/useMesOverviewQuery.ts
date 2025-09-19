import { mesOverview } from "@core/api/mes-overview/mesOverviewQuery";
import { useQuery } from "@tanstack/react-query";

export const useMesOverviewMesOverviewGetQuery = () => {
  return useQuery({
    ...mesOverview.mesOverviewGet(),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
