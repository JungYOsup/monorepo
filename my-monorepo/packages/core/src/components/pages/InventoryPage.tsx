import {
  Box,
  Card,
  Container,
  Grid,
  Group,
  Select,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { SearchBar } from "../molecules/SearchBar";
import { StatusCard } from "../molecules/StatusCard";
import { InventoryItem, InventoryTable } from "../organisms/InventoryTable";

// Mock inventory data
const mockInventoryData: InventoryItem[] = [
  {
    id: "1",
    partNumber: "SA-001",
    name: "스틸 샠프트 어셈블리",
    category: "주요 부품",
    currentStock: 150,
    minimumStock: 50,
    unit: "개",
    location: "A-01-03",
    lastUpdated: "2024-01-15",
    status: "sufficient",
  },
  {
    id: "2",
    partNumber: "BK-205",
    name: "베어링 키트",
    category: "소모품",
    currentStock: 25,
    minimumStock: 100,
    unit: "세트",
    location: "B-02-15",
    lastUpdated: "2024-01-14",
    status: "critical",
  },
  {
    id: "3",
    partNumber: "SK-301",
    name: "실 키트",
    category: "소모품",
    currentStock: 80,
    minimumStock: 50,
    unit: "개",
    location: "B-03-08",
    lastUpdated: "2024-01-13",
    status: "low",
  },
  {
    id: "4",
    partNumber: "BS-M12",
    name: "볼트 세트 M12x40",
    category: "체결재",
    currentStock: 500,
    minimumStock: 200,
    unit: "개",
    location: "C-01-12",
    lastUpdated: "2024-01-12",
    status: "sufficient",
  },
  {
    id: "5",
    partNumber: "LG-002",
    name: "윤활유 Grade 2",
    category: "소모품",
    currentStock: 15,
    minimumStock: 30,
    unit: "L",
    location: "D-02-05",
    lastUpdated: "2024-01-11",
    status: "low",
  },
];

export function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const filteredData = mockInventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.partNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const sufficientCount = mockInventoryData.filter(
    (item) => item.status === "sufficient"
  ).length;
  const lowCount = mockInventoryData.filter(
    (item) => item.status === "low"
  ).length;
  const criticalCount = mockInventoryData.filter(
    (item) => item.status === "critical"
  ).length;
  const totalValue = mockInventoryData.reduce(
    (sum, item) => sum + item.currentStock * 1000,
    0
  ); // Mock value

  const categories = Array.from(
    new Set(mockInventoryData.map((item) => item.category))
  );

  return (
    <Container size="xl" p="md">
      <Stack gap="lg">
        <Group justify="space-between">
          <Text fw={700} size="xl">
            재고 정보
          </Text>
          <Group>
            <Button leftSection={<Icon name="plus" />}>재고 추가</Button>
            <Button variant="outline" leftSection={<Icon name="download" />}>
              엑셀 다운로드
            </Button>
          </Group>
        </Group>

        {/* Summary Cards */}
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="총 품목"
              value={mockInventoryData.length}
              subtitle="관리 중인 품목"
              color="blue"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="충분"
              value={sufficientCount}
              status="pass"
              subtitle="안전 재고 이상"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="부족"
              value={lowCount}
              status="medium"
              subtitle="안전 재고 미달"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="긴급"
              value={criticalCount}
              status="fail"
              subtitle="긴급 보충 필요"
            />
          </Grid.Col>
        </Grid>

        {/* Filters */}
        <Card withBorder p="md">
          <Stack gap="md">
            <Text fw={500} size="sm">
              필터 및 검색
            </Text>
            <Grid>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <SearchBar
                  value={searchTerm}
                  onChange={setSearchTerm}
                  placeholder="부품명 또는 부품번호 검색..."
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 2 }}>
                <Select
                  placeholder="카테고리"
                  value={categoryFilter}
                  onChange={(value) => setCategoryFilter(value || "all")}
                  data={[
                    { value: "all", label: "전체 카테고리" },
                    ...categories.map((cat) => ({ value: cat, label: cat })),
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 2 }}>
                <Select
                  placeholder="재고 상태"
                  value={statusFilter}
                  onChange={(value) => setStatusFilter(value || "all")}
                  data={[
                    { value: "all", label: "전체 상태" },
                    { value: "sufficient", label: "충분" },
                    { value: "low", label: "부족" },
                    { value: "critical", label: "긴급" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Group>
                  <Button
                    variant="outline"
                    size="sm"
                    leftSection={<Icon name="filter" />}
                  >
                    고급 필터
                  </Button>
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setCategoryFilter("all");
                      setStatusFilter("all");
                    }}
                  >
                    초기화
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Stack>
        </Card>

        {/* Inventory Table */}
        <Card withBorder p="md">
          <Stack gap="md">
            <Group justify="space-between">
              <Text fw={500}>재고 현황 ({filteredData.length}건)</Text>
              <Group>
                <Button
                  variant="light"
                  size="sm"
                  leftSection={<Icon name="scan" />}
                >
                  바코드 스캔
                </Button>
                <Button
                  variant="light"
                  size="sm"
                  leftSection={<Icon name="edit" />}
                >
                  일괄 수정
                </Button>
              </Group>
            </Group>

            <InventoryTable data={filteredData} />
          </Stack>
        </Card>

        {/* Quick Actions */}
        <Card withBorder p="md" style={{ backgroundColor: "#fff3cd" }}>
          <Group justify="space-between">
            <Box>
              <Text fw={600} c="orange.8">
                긴급 조치 필요
              </Text>
              <Text size="sm" c="orange.7">
                {criticalCount}개 품목이 긴급 보충이 필요합니다.
              </Text>
            </Box>
            <Group>
              <Button
                color="orange"
                variant="light"
                leftSection={<Icon name="alert" />}
              >
                긴급 품목 보기
              </Button>
              <Button color="orange" leftSection={<Icon name="send" />}>
                구매 요청서 작성
              </Button>
            </Group>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
