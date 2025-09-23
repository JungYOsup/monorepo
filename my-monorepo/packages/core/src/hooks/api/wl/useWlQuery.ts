import { wl } from "@core/api/wl/wlQuery";
import { MasterApiWlWithEslViewWlWithEslViewIdGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWlWlWithEslViewWlWithEslViewIdGetQuery = (params: MasterApiWlWithEslViewWlWithEslViewIdGetRequest) => {
  return useQuery({
    ...wl.wlWithEslViewWlWithEslViewIdGet(params),
    retry: 1,
  });
};
