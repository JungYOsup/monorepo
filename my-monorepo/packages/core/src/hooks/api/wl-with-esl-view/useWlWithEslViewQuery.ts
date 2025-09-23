import { wlWithEslView } from "@core/api/wl-with-esl-view/wlWithEslViewQuery";
import { MasterApiWlWithEslViewFindPostRequest, MasterApiWlWithEslViewGetRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQuery } from "@tanstack/react-query";

export const useWlWithEslViewWlWithEslViewFindPostQuery = (params: MasterApiWlWithEslViewFindPostRequest) => {
  return useQuery({
    ...wlWithEslView.wlWithEslViewFindPost(params),
    enabled: !!params,
  });
};

export const useWlWithEslViewWlWithEslViewGetQuery = (params: MasterApiWlWithEslViewGetRequest) => {
  return useQuery({
    ...wlWithEslView.wlWithEslViewGet(params),
    retry: 1,
  });
};
