import { authWhoami } from "@core/api/auth-whoami/authWhoamiQuery";
import { useQuery } from "@tanstack/react-query";

export const useAuthWhoamiAuthWhoamiGetQuery = () => {
  return useQuery({
    ...authWhoami.authWhoamiGet(),
    staleTime: 1000 * 60,
    retry: 1,
  });
};
