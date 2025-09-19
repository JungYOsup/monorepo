import {
  InventoryPage,
  LoginPage,
  Navigation,
  NavigationPage,
  QualityResultsPage,
  UserHeader,
  WorkOrdersPage,
  WorkOrderStep,
} from "@core";
import { AppShell, Box } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const [isAuthenticated] = useLocalStorage({
    key: "isAuthenticated",
  });
  const isUserAuthenticated = JSON.parse(isAuthenticated || "false");

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

  return isUserAuthenticated ? (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: {
          base: 0, // Hidden on mobile (handled by Navigation component)
          sm: currentPage === "workorders" && currentStep !== "list" ? 200 : 80, // Tablet
          lg: 280, // Desktop
        },
        breakpoint: "sm",
      }}
      padding="0"
    >
      <AppShell.Header>
        <UserHeader />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navigation
          currentPage={currentPage}
          currentStep={currentPage === "workorders" ? currentStep : undefined}
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
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
