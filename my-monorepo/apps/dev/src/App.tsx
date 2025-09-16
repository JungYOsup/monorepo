import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import WorkOrderPage from "apps/dev/src/pages/workOrderPage";

export default function App() {
  return (
    <MantineProvider>
      <WorkOrderPage />
    </MantineProvider>
  );
}
