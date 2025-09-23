import { ModalProvider } from "@core/context/modal/ModalContext";
import { ModalManager } from "@core/index";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "apps/dev/src/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme="light">
          <DatesProvider settings={{ locale: "ko" }}>
            <ModalProvider>
              <App />
              <ModalManager />
              <Notifications />
            </ModalProvider>
          </DatesProvider>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
