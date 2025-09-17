import { WorkOrderStep } from "@core/components/pages/WorkOrdersPages";
import {
  Box,
  Burger,
  Drawer,
  Group,
  NavLink,
  Progress,
  ScrollArea,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Badge } from "../atoms/Badge";
import { Icon } from "../atoms/Icon";

export type NavigationPage = "workorders" | "inventory" | "quality";

export interface NavigationProps {
  currentPage: NavigationPage;
  currentStep?: WorkOrderStep;
  onPageChange: (page: NavigationPage) => void;
  onStepChange?: (step: WorkOrderStep) => void;
  workOrderStatus?: "pending" | "ongoing" | "done";
  stepCompletionStatus?: Partial<Record<WorkOrderStep, boolean>>;
}

const mainNavItems = [
  {
    id: "workorders" as NavigationPage,
    label: "작업지시서",
    icon: "fileText",
    description: "생산 작업 관리",
  },
  {
    id: "inventory" as NavigationPage,
    label: "재고 정보",
    icon: "package",
    description: "원부자재 현황",
  },
  {
    id: "quality" as NavigationPage,
    label: "검사 결과",
    icon: "checkCircle",
    description: "품질 관리 현황",
  },
];

const workOrderSteps = [
  {
    id: "list" as WorkOrderStep,
    label: "목록",
    icon: "list",
    description: "작업지시서 목록",
  },
  {
    id: "detail" as WorkOrderStep,
    label: "상세",
    icon: "fileText",
    description: "지시서 상세",
  },
  {
    id: "progress" as WorkOrderStep,
    label: "진행",
    icon: "trendingUp",
    description: "작업 진행",
  },
  {
    id: "materials" as WorkOrderStep,
    label: "자재",
    icon: "package",
    description: "원부자재 투입",
  },
  {
    id: "quality" as WorkOrderStep,
    label: "검사",
    icon: "checkCircle",
    description: "품질 검사",
  },
  {
    id: "report" as WorkOrderStep,
    label: "보고",
    icon: "flag",
    description: "최종 보고",
  },
];

const PAGE_TITLE = "생산 시점 관리 시스템";

export function Navigation({
  currentPage,
  currentStep,
  onPageChange,
  onStepChange,
  workOrderStatus = "pending",
  stepCompletionStatus = {},
}: NavigationProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1199px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  const getStepStatus = (stepId: WorkOrderStep) => {
    if (stepCompletionStatus[stepId]) return "completed";
    if (stepId === currentStep) return "current";
    return "available";
  };

  const completedSteps =
    Object.values(stepCompletionStatus).filter(Boolean).length;
  const totalSteps = workOrderSteps.length - 1; // Excluding 'list'

  // Mobile Navigation (Top tabs)
  if (isMobile) {
    return (
      <>
        <Box
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "white",
            borderBottom: "1px solid #e9ecef",
          }}
        >
          <Group justify="space-between" p="md">
            <Text fw={600} size="lg">
              {PAGE_TITLE}
            </Text>
            <Burger opened={opened} onClick={opened ? close : open} size="sm" />
          </Group>

          {currentPage === "workorders" && currentStep && (
            <Tabs
              value={currentStep}
              onChange={(value) => onStepChange?.(value as WorkOrderStep)}
            >
              <Tabs.List>
                {workOrderSteps.map((step) => {
                  const status = getStepStatus(step.id);
                  const isDisabled =
                    step.id !== "list" &&
                    workOrderStatus === "pending" &&
                    step.id !== "detail";

                  return (
                    <Tabs.Tab
                      key={step.id}
                      value={step.id}
                      disabled={isDisabled}
                      leftSection={<Icon name={step.icon} size={16} />}
                    >
                      <Text size="xs">{step.label}</Text>
                    </Tabs.Tab>
                  );
                })}
              </Tabs.List>
            </Tabs>
          )}
        </Box>

        <Drawer opened={opened} onClose={close} title="메뉴">
          <Stack gap="md">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                description={item.description}
                leftSection={<Icon name={item.icon} />}
                active={currentPage === item.id}
                onClick={() => {
                  onPageChange(item.id);
                  close();
                }}
              />
            ))}
          </Stack>
        </Drawer>
      </>
    );
  }

  // Tablet Navigation (Left vertical)
  if (isTablet) {
    return (
      <Box
        style={{
          width: currentPage === "workorders" && currentStep ? 200 : 80,
          borderRight: "1px solid #e9ecef",
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        <ScrollArea h="100%">
          <Stack gap="xs" p="md">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.id}
                label={
                  currentPage === "workorders" && currentStep
                    ? item.label
                    : undefined
                }
                leftSection={<Icon name={item.icon} />}
                active={currentPage === item.id}
                onClick={() => onPageChange(item.id)}
                style={{
                  justifyContent:
                    currentPage === "workorders" && currentStep
                      ? "flex-start"
                      : "center",
                }}
              />
            ))}

            {currentPage === "workorders" && currentStep && (
              <>
                <Text size="xs" c="dimmed" mt="md" mb="xs">
                  작업 단계
                </Text>
                {workOrderSteps.map((step) => {
                  const status = getStepStatus(step.id);
                  const isDisabled =
                    step.id !== "list" &&
                    workOrderStatus === "pending" &&
                    step.id !== "detail";

                  return (
                    <NavLink
                      key={step.id}
                      label={step.label}
                      leftSection={
                        status === "completed" ? (
                          <Icon name="checkCircle" color="green" />
                        ) : (
                          <Icon name={step.icon} />
                        )
                      }
                      active={currentStep === step.id}
                      disabled={isDisabled}
                      onClick={() => !isDisabled && onStepChange?.(step.id)}
                      rightSection={
                        status === "completed" && (
                          <Badge color="green" size="xs">
                            ✓
                          </Badge>
                        )
                      }
                    />
                  );
                })}
                <Box
                  mt="lg"
                  p="sm"
                  style={{ backgroundColor: "#f8f9fa", borderRadius: 8 }}
                >
                  <Text size="xs" c="dimmed" mb="xs">
                    진행상황
                  </Text>
                  <Progress
                    value={(completedSteps / totalSteps) * 100}
                    size="sm"
                  />
                  <Text size="xs" c="dimmed" mt="xs">
                    {completedSteps}/{totalSteps} 완료
                  </Text>
                </Box>
              </>
            )}
          </Stack>
        </ScrollArea>
      </Box>
    );
  }

  // Desktop Navigation (Full sidebar)
  return (
    <Box
      style={{
        width: 280,
        borderRight: "1px solid #e9ecef",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <ScrollArea h="100%">
        <Stack gap="md" p="lg">
          <Text fw={700} size="xl" ta={"center"}>
            {PAGE_TITLE}
          </Text>

          <Stack gap="xs">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                description={item.description}
                leftSection={<Icon name={item.icon} />}
                active={currentPage === item.id}
                onClick={() => onPageChange(item.id)}
              />
            ))}
          </Stack>

          {currentPage === "workorders" && currentStep && (
            <Stack gap="sm">
              <Text fw={600} size="sm" mt="lg">
                작업 단계
              </Text>
              {workOrderSteps.map((step) => {
                const status = getStepStatus(step.id);
                const isDisabled =
                  step.id !== "list" &&
                  workOrderStatus === "pending" &&
                  step.id !== "detail";

                return (
                  <NavLink
                    key={step.id}
                    label={step.label}
                    description={step.description}
                    leftSection={
                      status === "completed" ? (
                        <Icon name="checkCircle" color="green" />
                      ) : (
                        <Icon name={step.icon} />
                      )
                    }
                    active={currentStep === step.id}
                    disabled={isDisabled}
                    onClick={() => !isDisabled && onStepChange?.(step.id)}
                    rightSection={
                      status === "completed" && (
                        <Badge color="green" size="sm">
                          완료
                        </Badge>
                      )
                    }
                  />
                );
              })}

              <Box
                mt="lg"
                p="md"
                style={{ backgroundColor: "#f8f9fa", borderRadius: 8 }}
              >
                <Group justify="space-between" mb="xs">
                  <Text size="sm" fw={500}>
                    작업 진행률
                  </Text>
                  <Badge status={workOrderStatus} size="sm" />
                </Group>
                <Progress value={(completedSteps / totalSteps) * 100} mb="xs" />
                <Text size="xs" c="dimmed">
                  {completedSteps}/{totalSteps} 단계 완료
                </Text>
              </Box>
            </Stack>
          )}
        </Stack>
      </ScrollArea>
    </Box>
  );
}
