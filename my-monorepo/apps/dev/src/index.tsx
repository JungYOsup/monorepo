import { ModalProvider } from "@core/context/modal/ModalContext";
import { ModalManager, useApiNotification } from "@core/index";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import {
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
  defaultOptions: {
    mutations: {
      onError: handleError,
      onSuccess: handleSuccess,
    },
  },
  queryCache: new QueryCache({
    onError: handleError,
    onSuccess: handleSuccess,
  }),
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme="light">
          <DatesProvider settings={{ locale: "ko" }}>
            <ModalProvider>
              <App />
              <ModalManager />
            </ModalProvider>
          </DatesProvider>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
