import { authWhoami } from "@core/api/auth-whoami/authWhoamiQuery";
import { useQuery } from "@tanstack/react-query";

export const useAuthWhoamiAuthWhoamiGetQuery = () => {
  return useQuery({
    ...authWhoami.authWhoamiGet({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    }),
    staleTime: 1000 * 60,
  });
};
