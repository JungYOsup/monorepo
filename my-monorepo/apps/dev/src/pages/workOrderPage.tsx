import Footer from "@core/components/workOrderFooter/WorkOrderFooter";
import WorkOrderGrid from "@core/components/workOrderGrid/WorkOrderGrid";
import Header from "@core/components/workOrderHeader/WorkOrderHeader";
import { AppShell } from "@mantine/core";
import "@mantine/core/styles.css";
import { useMemo, useState } from "react";

const workOrderImages = [
  "https://images.unsplash.com/photo-1730584475392-b633246fd486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTc5MDY0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1660602638492-cc2bd201190b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwcHJvZHVjdGlvbiUyMGxpbmV8ZW58MXx8fHwxNzU3OTM2NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1703227373720-cff89520dd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBvcGVyYXRpb258ZW58MXx8fHwxNzU4MDA4Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const workOrders = [
  {
    id: "WO-2024-001",
    itemName: "스마트 센서 모듈",
    workName: "조립 및 검수",
    quantity: "100개",
    equipment: "조립라인 A",
    dueDate: "2024.01.15",
    status: "대기",
    image: workOrderImages[0],
  },
  {
    id: "WO-2024-002",
    itemName: "전력 제어 보드",
    workName: "PCB 실장",
    quantity: "50개",
    equipment: "SMT라인 B",
    dueDate: "2024.01.16",
    status: "진행중",
    image: workOrderImages[1],
  },
  {
    id: "WO-2024-003",
    itemName: "케이블 하네스",
    workName: "압착 및 테스트",
    quantity: "200개",
    equipment: "압착기 C",
    dueDate: "2024.01.17",
    status: "완료",
    image: workOrderImages[2],
  },
  {
    id: "WO-2024-004",
    itemName: "알루미늄 프레임",
    workName: "CNC 가공",
    quantity: "30개",
    equipment: "CNC라인 D",
    dueDate: "2024.01.18",
    status: "대기",
    image: workOrderImages[0],
  },
  {
    id: "WO-2024-005",
    itemName: "터치스크린 패널",
    workName: "최종 검사",
    quantity: "80개",
    equipment: "검사라인 E",
    dueDate: "2024.01.19",
    status: "진행중",
    image: workOrderImages[1],
  },
  {
    id: "WO-2024-006",
    itemName: "모터 드라이버",
    workName: "기능 테스트",
    quantity: "40개",
    equipment: "테스트벤치 F",
    dueDate: "2024.01.20",
    status: "완료",
    image: workOrderImages[2],
  },
  {
    id: "WO-2024-007",
    itemName: "배터리 팩",
    workName: "셀 조립",
    quantity: "120개",
    equipment: "배터리라인 G",
    dueDate: "2024.01.21",
    status: "대기",
    image: workOrderImages[0],
  },
  {
    id: "WO-2024-008",
    itemName: "금속 브래킷",
    workName: "절곡 가공",
    quantity: "150개",
    equipment: "절곡기 H",
    dueDate: "2024.01.22",
    status: "진행중",
    image: workOrderImages[1],
  },
  {
    id: "WO-2024-009",
    itemName: "플라스틱 케이스",
    workName: "사출 성형",
    quantity: "300개",
    equipment: "사출기 I",
    dueDate: "2024.01.23",
    status: "완료",
    image: workOrderImages[2],
  },
  {
    id: "WO-2024-010",
    itemName: "광학 렌즈",
    workName: "연마 및 코팅",
    quantity: "25개",
    equipment: "광학라인 J",
    dueDate: "2024.01.24",
    status: "대기",
    image: workOrderImages[0],
  },
];

export default function App() {
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<string | null>(
    null
  );
  const [showFilters, setShowFilters] = useState(false);

  // 작업지시서 옵션
  const workOrderOptions = useMemo(
    () => [
      { value: "", label: "전체 작업지시서" },
      ...workOrders.map((order) => ({
        value: order.id,
        label: `${order.id} - ${order.itemName}`,
      })),
    ],
    []
  );

  // 필터링된 리스트
  const filteredWorkOrders = useMemo(() => {
    let filtered = workOrders;

    if (selectedWorkOrder) {
      filtered = filtered.filter((order) => order.id === selectedWorkOrder);
    }

    return filtered;
  }, [selectedWorkOrder]);

  return (
    <AppShell
      header={{ height: showFilters ? 140 : 60 }}
      footer={{ height: 70 }}
      padding="md"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <AppShell.Header px="md">
        <Header
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          selectedWorkOrder={selectedWorkOrder}
          setSelectedWorkOrder={setSelectedWorkOrder}
          workOrderOptions={workOrderOptions}
        />
      </AppShell.Header>

      <AppShell.Main>
        <WorkOrderGrid
          filteredWorkOrders={filteredWorkOrders}
          resetFilters={() => {
            setSelectedWorkOrder(null);
          }}
        />
      </AppShell.Main>

      <AppShell.Footer px="md">
        <Footer
          count={filteredWorkOrders.length}
          hasFilter={!!selectedWorkOrder}
        />
      </AppShell.Footer>
    </AppShell>
  );
}
