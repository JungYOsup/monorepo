import { QualityCheckTemplate } from "@core/components/templates/QualityCheckTemplate";
import {
  Box,
  Center,
  Container,
  Grid,
  Group,
  Loader,
  Select,
  Stack,
  Text,
} from "@mantine/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { WorkOrderCard, WorkOrderData } from "../organisms/WorkOrderCard";
import { FinalReportTemplate } from "../templates/FinalReportTemplate";
import { MaterialInputTemplate } from "../templates/MaterialInputTemplate";
import { ProgressTemplate } from "../templates/ProgressTemplate";
import { WorkOrderDetailTemplate } from "../templates/WorkOrderDetailTemplate";

export type WorkOrderStep =
  | "list"
  | "detail"
  | "progress"
  | "materials"
  | "quality"
  | "report";

export interface WorkOrdersPageProps {
  currentStep: WorkOrderStep;
  onStepChange: (step: WorkOrderStep) => void;
  workOrderStatus?: "pending" | "ongoing" | "done";
  stepCompletionStatus?: Record<WorkOrderStep, boolean>;
}

// Expanded mock data - 30+ items for infinite scroll
const mockWorkOrders: WorkOrderData[] = [
  {
    id: "WO-001",
    productName: "산업용 벵어링 어셈블리",
    productImage:
      "https://images.unsplash.com/photo-1583737097428-af53774819a2?w=400",
    lot: "LOT-2024-001",
    targetQuantity: 500,
    currentQuantity: 0,
    status: "pending",
    priority: "high",
    dueDate: "2024-01-15",
  },
  {
    id: "WO-002",
    productName: "유압 실린더",
    productImage:
      "https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?w=400",
    lot: "LOT-2024-002",
    targetQuantity: 250,
    currentQuantity: 125,
    status: "ongoing",
    priority: "medium",
    dueDate: "2024-01-20",
  },
  {
    id: "WO-003",
    productName: "스틸 제작 키트",
    productImage:
      "https://images.unsplash.com/photo-1730584475392-b633246fd486?w=400",
    lot: "LOT-2024-003",
    targetQuantity: 100,
    currentQuantity: 100,
    status: "done",
    priority: "low",
    dueDate: "2024-01-10",
  },
  {
    id: "WO-004",
    productName: "정밀 기어박스",
    productImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    lot: "LOT-2024-004",
    targetQuantity: 75,
    currentQuantity: 45,
    status: "ongoing",
    priority: "high",
    dueDate: "2024-01-18",
  },
  {
    id: "WO-005",
    productName: "알루미늄 프레임",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-005",
    targetQuantity: 300,
    currentQuantity: 0,
    status: "pending",
    priority: "medium",
    dueDate: "2024-01-25",
  },
  {
    id: "WO-006",
    productName: "전자 제어 모듈",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-006",
    targetQuantity: 150,
    currentQuantity: 150,
    status: "done",
    priority: "high",
    dueDate: "2024-01-08",
  },
  {
    id: "WO-007",
    productName: "컨베이어 벨트 시스템",
    productImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    lot: "LOT-2024-007",
    targetQuantity: 25,
    currentQuantity: 12,
    status: "ongoing",
    priority: "low",
    dueDate: "2024-01-30",
  },
  {
    id: "WO-008",
    productName: "스테인리스 파이프",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-008",
    targetQuantity: 400,
    currentQuantity: 0,
    status: "pending",
    priority: "medium",
    dueDate: "2024-02-01",
  },
  {
    id: "WO-009",
    productName: "로봇 암 조립품",
    productImage:
      "https://images.unsplash.com/photo-1583737097428-af53774819a2?w=400",
    lot: "LOT-2024-009",
    targetQuantity: 50,
    currentQuantity: 35,
    status: "ongoing",
    priority: "high",
    dueDate: "2024-01-22",
  },
  {
    id: "WO-010",
    productName: "온도 센서 유닛",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-010",
    targetQuantity: 200,
    currentQuantity: 200,
    status: "done",
    priority: "medium",
    dueDate: "2024-01-05",
  },
  {
    id: "WO-011",
    productName: "산업용 펌프",
    productImage:
      "https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?w=400",
    lot: "LOT-2024-011",
    targetQuantity: 80,
    currentQuantity: 0,
    status: "pending",
    priority: "high",
    dueDate: "2024-02-05",
  },
  {
    id: "WO-012",
    productName: "캐스팅 몰드",
    productImage:
      "https://images.unsplash.com/photo-1730584475392-b633246fd486?w=400",
    lot: "LOT-2024-012",
    targetQuantity: 120,
    currentQuantity: 60,
    status: "ongoing",
    priority: "medium",
    dueDate: "2024-02-08",
  },
  {
    id: "WO-013",
    productName: "압력 조절 밵브",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-013",
    targetQuantity: 180,
    currentQuantity: 180,
    status: "done",
    priority: "low",
    dueDate: "2024-01-03",
  },
  {
    id: "WO-014",
    productName: "모터 드라이브",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-014",
    targetQuantity: 90,
    currentQuantity: 0,
    status: "pending",
    priority: "high",
    dueDate: "2024-02-12",
  },
  {
    id: "WO-015",
    productName: "변속기 어셈블리",
    productImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    lot: "LOT-2024-015",
    targetQuantity: 60,
    currentQuantity: 30,
    status: "ongoing",
    priority: "medium",
    dueDate: "2024-02-15",
  },
  {
    id: "WO-016",
    productName: "브레이크 시스템",
    productImage:
      "https://images.unsplash.com/photo-1583737097428-af53774819a2?w=400",
    lot: "LOT-2024-016",
    targetQuantity: 110,
    currentQuantity: 110,
    status: "done",
    priority: "high",
    dueDate: "2024-01-02",
  },
  {
    id: "WO-017",
    productName: "유체 커플링",
    productImage:
      "https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?w=400",
    lot: "LOT-2024-017",
    targetQuantity: 140,
    currentQuantity: 0,
    status: "pending",
    priority: "low",
    dueDate: "2024-02-20",
  },
  {
    id: "WO-018",
    productName: "전력 변환기",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-018",
    targetQuantity: 95,
    currentQuantity: 48,
    status: "ongoing",
    priority: "medium",
    dueDate: "2024-02-18",
  },
  {
    id: "WO-019",
    productName: "자동화 컨트롤러",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-019",
    targetQuantity: 70,
    currentQuantity: 70,
    status: "done",
    priority: "high",
    dueDate: "2024-01-01",
  },
  {
    id: "WO-020",
    productName: "냉각 시스템",
    productImage:
      "https://images.unsplash.com/photo-1730584475392-b633246fd486?w=400",
    lot: "LOT-2024-020",
    targetQuantity: 160,
    currentQuantity: 0,
    status: "pending",
    priority: "medium",
    dueDate: "2024-02-25",
  },
  {
    id: "WO-021",
    productName: "진동 댐퍼",
    productImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    lot: "LOT-2024-021",
    targetQuantity: 85,
    currentQuantity: 42,
    status: "ongoing",
    priority: "low",
    dueDate: "2024-03-01",
  },
  {
    id: "WO-022",
    productName: "액츄에이터",
    productImage:
      "https://images.unsplash.com/photo-1583737097428-af53774819a2?w=400",
    lot: "LOT-2024-022",
    targetQuantity: 130,
    currentQuantity: 130,
    status: "done",
    priority: "high",
    dueDate: "2023-12-28",
  },
  {
    id: "WO-023",
    productName: "트랜스미션",
    productImage:
      "https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?w=400",
    lot: "LOT-2024-023",
    targetQuantity: 55,
    currentQuantity: 0,
    status: "pending",
    priority: "medium",
    dueDate: "2024-03-05",
  },
  {
    id: "WO-024",
    productName: "유압 호스",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-024",
    targetQuantity: 220,
    currentQuantity: 110,
    status: "ongoing",
    priority: "high",
    dueDate: "2024-03-08",
  },
  {
    id: "WO-025",
    productName: "안전 스위치",
    productImage:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400",
    lot: "LOT-2024-025",
    targetQuantity: 190,
    currentQuantity: 190,
    status: "done",
    priority: "medium",
    dueDate: "2023-12-30",
  },
];

export function WorkOrdersPage({
  currentStep,
  onStepChange,
  workOrderStatus,
  stepCompletionStatus,
}: WorkOrdersPageProps) {
  const [selectedWorkOrder, setSelectedWorkOrder] =
    useState<WorkOrderData | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [displayedItems, setDisplayedItems] = useState(10);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  // Filter orders based on status and priority
  const filteredOrders = mockWorkOrders.filter((order) => {
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || order.priority === priorityFilter;
    return matchesStatus && matchesPriority;
  });

  // Get currently displayed orders
  const currentOrders = filteredOrders.slice(0, displayedItems);
  const hasMore = displayedItems < filteredOrders.length;

  // Load more items
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setDisplayedItems((prev) => Math.min(prev + 10, filteredOrders.length));
      setLoading(false);
    }, 300);
  }, [loading, hasMore, filteredOrders.length]);

  // Reset displayed items when filters change
  useEffect(() => {
    setDisplayedItems(10);
  }, [statusFilter, priorityFilter]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, hasMore]);

  const handleWorkOrderSelect = (workOrder: WorkOrderData) => {
    setSelectedWorkOrder(workOrder);
    onStepChange("detail");
  };

  const handleStartWork = () => {
    onStepChange("progress");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "list":
        return (
          <Container size="xl" p="md">
            <Stack gap="lg">
              {/* Touch-friendly filter controls */}
              <Group justify="space-between" align="center" wrap="wrap">
                <Text size="xl" fw={600} c="dark">
                  작업지시서 목록 ({filteredOrders.length}개)
                </Text>

                <Group gap="md">
                  <Select
                    placeholder="상태 선택"
                    value={statusFilter}
                    onChange={(value) => setStatusFilter(value || "all")}
                    data={[
                      { value: "all", label: "전체 상태" },
                      { value: "pending", label: "대기중" },
                      { value: "ongoing", label: "진행중" },
                      { value: "done", label: "완료" },
                    ]}
                    size="md"
                    style={{ minWidth: 140 }}
                    styles={{
                      input: {
                        minHeight: 44, // Touch-friendly height
                        fontSize: "16px",
                      },
                    }}
                  />

                  <Select
                    placeholder="우선순위 선택"
                    value={priorityFilter}
                    onChange={(value) => setPriorityFilter(value || "all")}
                    data={[
                      { value: "all", label: "전체 우선순위" },
                      { value: "high", label: "높음" },
                      { value: "medium", label: "중간" },
                      { value: "low", label: "낮음" },
                    ]}
                    size="md"
                    style={{ minWidth: 140 }}
                    styles={{
                      input: {
                        minHeight: 44, // Touch-friendly height
                        fontSize: "16px",
                      },
                    }}
                  />
                </Group>
              </Group>

              {/* Work order grid - optimized for ~10 items per screen */}
              <Box style={{ minHeight: "60vh" }}>
                <Grid>
                  {currentOrders.map((order) => (
                    <Grid.Col
                      key={order.id}
                      span={{ base: 12, sm: 6, md: 4, lg: 3 }}
                    >
                      <WorkOrderCard
                        workOrder={order}
                        onClick={handleWorkOrderSelect}
                        viewMode="grid"
                      />
                    </Grid.Col>
                  ))}
                </Grid>
              </Box>

              {/* Infinite scroll loading indicator */}
              {hasMore && (
                <div ref={observerRef} style={{ padding: "20px 0" }}>
                  <Center>
                    {loading ? (
                      <Group gap="sm">
                        <Loader size="sm" />
                        <Text size="sm" c="dimmed">
                          더 많은 작업지시서를 불러오는 중...
                        </Text>
                      </Group>
                    ) : (
                      <Text size="sm" c="dimmed">
                        스크롤하여 더 많은 항목 보기
                      </Text>
                    )}
                  </Center>
                </div>
              )}

              {/* End of list indicator */}
              {!hasMore && filteredOrders.length > 10 && (
                <Center p="md">
                  <Text size="sm" c="dimmed">
                    모든 작업지시서를 확인했습니다 ({filteredOrders.length}개)
                  </Text>
                </Center>
              )}
            </Stack>
          </Container>
        );

      case "detail":
        return selectedWorkOrder ? (
          <WorkOrderDetailTemplate
            workOrder={selectedWorkOrder}
            onStartWork={handleStartWork}
          />
        ) : null;

      case "progress":
        return selectedWorkOrder ? (
          <ProgressTemplate workOrderId={selectedWorkOrder.id} />
        ) : null;

      case "materials":
        return selectedWorkOrder ? (
          <MaterialInputTemplate workOrderId={selectedWorkOrder.id} />
        ) : null;

      case "quality":
        return selectedWorkOrder ? (
          <QualityCheckTemplate workOrderId={selectedWorkOrder.id} />
        ) : null;

      case "report":
        return selectedWorkOrder ? (
          <FinalReportTemplate
            workOrderId={selectedWorkOrder.id}
            workOrderData={selectedWorkOrder}
          />
        ) : null;

      default:
        return null;
    }
  };

  return renderStepContent();
}
