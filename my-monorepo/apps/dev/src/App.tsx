import {
  InventoryPage,
  LoginPage,
  Navigation,
  NavigationPage,
  QualityResultsPage,
  UserHeader,
  useTenantConfig,
  WorkOrdersPage,
  WorkOrderStep,
} from "@core";
import { PageId } from "@core/tenant/types";
import { AppShell, Box } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { useLocalStorage } from "@mantine/hooks";
import "@mantine/notifications/styles.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const NAVIGATION_PAGE_TO_TENANT_PAGE: Record<NavigationPage, PageId> = {
  workorders: "orders/list",
  inventory: "inventory/list",
  quality: "quality/results",
};

const normalizePath = (path: string) => {
  if (!path) {
    return "/";
  }
  if (path === "/") {
    return path;
  }
  return path.replace(/\/+$/, "");
};

const ensureLeadingSlash = (path: string) =>
  path.startsWith("/") ? path : `/${path}`;

const resolveNavigationPage = (
  pathname: string,
  routes: Record<NavigationPage, string>
): NavigationPage | undefined => {
  const normalized = normalizePath(pathname);
  return (Object.entries(routes) as Array<[NavigationPage, string]>).find(
    ([, path]) => {
      const normalizedTarget = normalizePath(path);
      return (
        normalized === normalizedTarget ||
        normalized.startsWith(`${normalizedTarget}/`)
      );
    }
  )?.[0];
};

export default function App() {
  const tenantConfig = useTenantConfig();
  const enabledPages = useMemo<NavigationPage[]>(() => {
    const pages = (
      Object.entries(NAVIGATION_PAGE_TO_TENANT_PAGE) as Array<
        [NavigationPage, PageId]
      >
    )
      .filter(([, pageId]) => tenantConfig.pages?.[pageId]?.display !== false)
      .map(([navPage]) => navPage);

    return pages.length > 0 ? pages : ["workorders"];
  }, [tenantConfig]);

  const pageRoutes = useMemo<Record<NavigationPage, string>>(() => {
    const entries = Object.entries(NAVIGATION_PAGE_TO_TENANT_PAGE) as Array<
      [NavigationPage, PageId]
    >;

    return entries.reduce<Record<NavigationPage, string>>(
      (acc, [navPage, pageId]) => {
        const endpoint = tenantConfig.pages?.[pageId]?.endpoint;
        const fallback = `/${navPage}`;
        const normalized = normalizePath(
          ensureLeadingSlash(endpoint ?? fallback)
        );
        acc[navPage] = normalized;
        return acc;
      },
      {} as Record<NavigationPage, string>
    );
  }, [tenantConfig]);

  const [isAuthenticated] = useLocalStorage({
    key: "isAuthenticated",
  });
  const isUserAuthenticated = JSON.parse(isAuthenticated || "false");

  const location = useLocation();
  const navigate = useNavigate();

  const derivedPageFromPath = useMemo<NavigationPage | undefined>(() => {
    if (!Object.keys(pageRoutes).length) {
      return undefined;
    }
    return resolveNavigationPage(location.pathname, pageRoutes);
  }, [location.pathname, pageRoutes]);

  const currentPage = useMemo<NavigationPage>(() => {
    if (derivedPageFromPath && enabledPages.includes(derivedPageFromPath)) {
      return derivedPageFromPath;
    }

    return enabledPages[0] ?? "workorders";
  }, [derivedPageFromPath, enabledPages]);

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

  useEffect(() => {
    if (!isUserAuthenticated || enabledPages.length === 0) {
      return;
    }

    const targetPath = pageRoutes[currentPage];
    if (!targetPath) {
      return;
    }

    const normalizedCurrent = normalizePath(location.pathname);
    const normalizedTarget = normalizePath(targetPath);
    if (
      normalizedCurrent !== normalizedTarget &&
      !normalizedCurrent.startsWith(`${normalizedTarget}/`)
    ) {
      navigate(targetPath || "/", { replace: true });
    }
  }, [
    currentPage,
    enabledPages,
    isUserAuthenticated,
    location.pathname,
    navigate,
    pageRoutes,
  ]);

  useEffect(() => {
    if (currentPage !== "workorders") {
      setCurrentStep("list");
    }
  }, [currentPage]);

  const handlePageChange = useCallback(
    (page: NavigationPage) => {
      if (!enabledPages.includes(page)) {
        return;
      }

      const targetPath = pageRoutes[page];
      if (!targetPath) {
        return;
      }

      const normalizedCurrent = normalizePath(location.pathname);
      const normalizedTarget = normalizePath(targetPath);
      if (
        normalizedCurrent !== normalizedTarget &&
        !normalizedCurrent.startsWith(`${normalizedTarget}/`)
      ) {
        navigate(targetPath);
      }

      if (page !== "workorders") {
        setCurrentStep("list");
      }
    },
    [enabledPages, location.pathname, navigate, pageRoutes]
  );

  const handleStepChange = (step: WorkOrderStep) => {
    if (currentPage !== "workorders") {
      return;
    }

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
    if (!enabledPages.includes(currentPage)) {
      return null;
    }

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
        return null;
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
          visiblePages={enabledPages}
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
