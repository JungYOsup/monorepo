import { ModalProvider } from "@core/context/modal/ModalContext";
import { ModalManager, TenantProvider, useApiNotification } from "@core/index";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import App from "apps/dev/src/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const { handleError, handleSuccess } = useApiNotification();
const queryClient = new QueryClient({
  // Query 성공 알림은 과도할 수 있어 에러만 전역 처리
  queryCache: new QueryCache({ onError: handleError }),
  // 모든 뮤테이션 성공/실패를 전역 처리
  mutationCache: new MutationCache({
    onError: handleError,
    onSuccess: handleSuccess,
  }),
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TenantProvider companyName="core">
        <QueryClientProvider client={queryClient}>
          <MantineProvider defaultColorScheme="light">
            <DatesProvider settings={{ locale: "ko" }}>
              <ModalProvider>
                <App />
                <ModalManager />
                <Notifications limit={1} />
              </ModalProvider>
            </DatesProvider>
          </MantineProvider>
        </QueryClientProvider>
      </TenantProvider>
    </BrowserRouter>
  </React.StrictMode>
);
