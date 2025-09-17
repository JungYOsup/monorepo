import {
  InventoryPage,
  Navigation,
  NavigationPage,
  QualityResultsPage,
  WorkOrdersPage,
  WorkOrderStep,
} from "@core";
import { AppShell, Box, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { DatesProvider } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>("workorders");
  const [currentStep, setCurrentStep] = useState<WorkOrderStep>("list");
  const [workOrderStatus, setWorkOrderStatus] = useState<
    "pending" | "ongoing" | "done"
  >("pending");
  const [stepCompletionStatus, setStepCompletionStatus] = useState<
    Record<WorkOrderStep, boolean>
  >({
    list: true,
    detail: false,
    progress: false,
    materials: false,
    quality: false,
    report: false,
  });

  const handlePageChange = (page: NavigationPage) => {
    setCurrentPage(page);
    // Reset work order step when changing main pages
    if (page !== "workorders") {
      setCurrentStep("list");
    }
  };

  const handleStepChange = (step: WorkOrderStep) => {
    setCurrentStep(step);

    // Mark step as completed when visited
    if (step !== "list") {
      setStepCompletionStatus((prev) => ({ ...prev, [step]: true }));
    }

    // Update work order status based on progress
    if (step === "progress" && workOrderStatus === "pending") {
      setWorkOrderStatus("ongoing");
    }
  };

  const renderMainContent = () => {
    switch (currentPage) {
      case "workorders":
        return (
          <WorkOrdersPage
            currentStep={currentStep}
            onStepChange={handleStepChange}
            workOrderStatus={workOrderStatus}
            stepCompletionStatus={stepCompletionStatus}
          />
        );
      case "inventory":
        return <InventoryPage />;
      case "quality":
        return <QualityResultsPage />;
      default:
        return (
          <WorkOrdersPage
            currentStep={currentStep}
            onStepChange={handleStepChange}
            workOrderStatus={workOrderStatus}
            stepCompletionStatus={stepCompletionStatus}
          />
        );
    }
  };

  return (
    <MantineProvider defaultColorScheme="light">
      <DatesProvider settings={{ locale: "ko" }}>
        <AppShell
          navbar={{
            width: {
              base: 0, // Hidden on mobile (handled by Navigation component)
              sm:
                currentPage === "workorders" && currentStep !== "list"
                  ? 200
                  : 80, // Tablet
              lg: 280, // Desktop
            },
            breakpoint: "sm",
          }}
          padding="0"
        >
          <AppShell.Navbar>
            <Navigation
              currentPage={currentPage}
              currentStep={
                currentPage === "workorders" ? currentStep : undefined
              }
              onPageChange={handlePageChange}
              onStepChange={handleStepChange}
              workOrderStatus={workOrderStatus}
              stepCompletionStatus={stepCompletionStatus}
            />
          </AppShell.Navbar>

          <AppShell.Main>
            <Box style={{ minHeight: "100vh" }}>{renderMainContent()}</Box>
          </AppShell.Main>
        </AppShell>
      </DatesProvider>
    </MantineProvider>
  );
}
