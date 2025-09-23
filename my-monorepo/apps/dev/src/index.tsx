import { ModalProvider } from "@core/context/modal/ModalContext";
import { ModalManager } from "@core/index";
import { createAppQueryClient } from "@core/query/queryClient";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "apps/dev/src/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = createAppQueryClient();

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
