import { mesOverview } from "@core/api/mes-overview/mesOverviewQuery";
import { useQuery } from "@tanstack/react-query";

export const useMesOverviewMesOverviewGetQuery = () => {
  return useQuery({
    ...mesOverview.mesOverviewGet(),
    retry: 1,
  });
};
