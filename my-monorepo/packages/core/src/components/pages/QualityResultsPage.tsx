import {
  Box,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Pagination,
  RingProgress,
  ScrollArea,
  Select,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { SearchBar } from "../molecules/SearchBar";
import { StatusCard } from "../molecules/StatusCard";

interface QualityResult {
  id: string;
  workOrderId: string;
  productName: string;
  lot: string;
  inspectionDate: string;
  inspector: string;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  overallResult: "pass" | "fail";
  defectRate: number;
  notes: string;
}

// Mock quality results data
const mockQualityResults: QualityResult[] = [
  {
    id: "QR-001",
    workOrderId: "WO-001",
    productName: "스틸 샠프트 어셈블리",
    lot: "LOT-2024-001",
    inspectionDate: "2024-01-15",
    inspector: "김검사",
    totalChecks: 6,
    passedChecks: 6,
    failedChecks: 0,
    overallResult: "pass",
    defectRate: 0,
    notes: "모든 검사 항목 합격",
  },
  {
    id: "QR-002",
    workOrderId: "WO-002",
    productName: "유압 실린더",
    lot: "LOT-2024-002",
    inspectionDate: "2024-01-14",
    inspector: "이품질",
    totalChecks: 8,
    passedChecks: 7,
    failedChecks: 1,
    overallResult: "fail",
    defectRate: 2.5,
    notes: "표면 마감 불량 발견",
  },
  {
    id: "QR-003",
    workOrderId: "WO-003",
    productName: "베어링 키트",
    lot: "LOT-2024-003",
    inspectionDate: "2024-01-13",
    inspector: "박검증",
    totalChecks: 5,
    passedChecks: 5,
    failedChecks: 0,
    overallResult: "pass",
    defectRate: 0,
    notes: "우수 품질 인증",
  },
  {
    id: "QR-004",
    workOrderId: "WO-004",
    productName: "볼트 세트",
    lot: "LOT-2024-004",
    inspectionDate: "2024-01-12",
    inspector: "최검사",
    totalChecks: 4,
    passedChecks: 3,
    failedChecks: 1,
    overallResult: "fail",
    defectRate: 1.8,
    notes: "치수 불량",
  },
];

export function QualityResultsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [inspectorFilter, setInspectorFilter] = useState<string>("all");
  const [dateRange, setDateRange] = useState<[string | null, string | null]>([
    null,
    null,
  ]);
  const [activePage, setActivePage] = useState(1);

  const filteredResults = mockQualityResults.filter((result) => {
    const matchesSearch =
      result.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.workOrderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.lot.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || result.overallResult === statusFilter;
    const matchesInspector =
      inspectorFilter === "all" || result.inspector === inspectorFilter;
    return matchesSearch && matchesStatus && matchesInspector;
  });

  const totalResults = mockQualityResults.length;
  const passedResults = mockQualityResults.filter(
    (r) => r.overallResult === "pass"
  ).length;
  const failedResults = mockQualityResults.filter(
    (r) => r.overallResult === "fail"
  ).length;
  const passRate = Math.round((passedResults / totalResults) * 100);
  const averageDefectRate =
    mockQualityResults.reduce((sum, r) => sum + r.defectRate, 0) / totalResults;

  const inspectors = Array.from(
    new Set(mockQualityResults.map((r) => r.inspector))
  );

  const rows = filteredResults.map((result) => (
    <Table.Tr key={result.id}>
      <Table.Td>
        <Text size="sm" fw={500}>
          {result.workOrderId}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{result.productName}</Text>
        <Text size="xs" c="dimmed">
          {result.lot}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{result.inspectionDate}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{result.inspector}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <Text size="sm" c="green">
            {result.passedChecks}
          </Text>
          <Text size="sm" c="dimmed">
            /
          </Text>
          <Text size="sm">{result.totalChecks}</Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Badge status={result.overallResult} size="sm">
          {result.overallResult === "pass" ? "합격" : "불합격"}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c={result.defectRate > 0 ? "red" : "green"}>
          {result.defectRate}%
        </Text>
      </Table.Td>
      <Table.Td style={{ maxWidth: 200 }}>
        <Text size="sm" lineClamp={1} title={result.notes}>
          {result.notes}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <Button
            variant="light"
            size="xs"
            leftSection={<Icon name="fileText" size={12} />}
          >
            상세
          </Button>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xl" p="md">
      <Stack gap="lg">
        <Group justify="space-between">
          <Text fw={700} size="xl">
            검사 결과
          </Text>
          <Group>
            <Button leftSection={<Icon name="download" />}>품질 보고서</Button>
            <Button variant="outline" leftSection={<Icon name="chart" />}>
              통계 분석
            </Button>
          </Group>
        </Group>

        {/* Quality Overview */}
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="전체 검사"
              value={totalResults}
              subtitle="총 검사 건수"
              color="blue"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="합격률"
              value={`${passRate}%`}
              status="pass"
              subtitle={`${passedResults}/${totalResults} 건`}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="불합격"
              value={failedResults}
              status="fail"
              subtitle="재검사 필요"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
            <StatusCard
              title="평균 불량률"
              value={`${averageDefectRate.toFixed(1)}%`}
              color="orange"
              subtitle="품질 지표"
            />
          </Grid.Col>
        </Grid>

        {/* Quality Visualization */}
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card withBorder p="md">
              <Text fw={500} mb="md">
                품질 동향
              </Text>
              <Box
                h={200}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f8f9fa",
                  borderRadius: 8,
                }}
              >
                <Text c="dimmed">품질 동향 차트 영역</Text>
              </Box>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Text fw={500} mb="md" ta="center">
                품질 분포
              </Text>
              <Center>
                <RingProgress
                  size={140}
                  thickness={12}
                  sections={[
                    {
                      value: passRate,
                      color: "green",
                      tooltip: `합격: ${passedResults}건`,
                    },
                    {
                      value: 100 - passRate,
                      color: "red",
                      tooltip: `불합격: ${failedResults}건`,
                    },
                  ]}
                  label={
                    <Center>
                      <Stack gap={0} align="center">
                        <Text fw={700} size="lg">
                          {passRate}%
                        </Text>
                        <Text size="xs" c="dimmed">
                          합격률
                        </Text>
                      </Stack>
                    </Center>
                  }
                />
              </Center>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Filters */}
        <Card withBorder p="md">
          <Stack gap="md">
            <Text fw={500} size="sm">
              검색 및 필터
            </Text>
            <Grid>
              <Grid.Col span={{ base: 12, md: 3 }}>
                <SearchBar
                  value={searchTerm}
                  onChange={setSearchTerm}
                  placeholder="작업지시서, 제품명 검색..."
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 2 }}>
                <Select
                  placeholder="검사 결과"
                  value={statusFilter}
                  onChange={(value) => setStatusFilter(value || "all")}
                  data={[
                    { value: "all", label: "전체 결과" },
                    { value: "pass", label: "합격" },
                    { value: "fail", label: "불합격" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 2 }}>
                <Select
                  placeholder="검사자"
                  value={inspectorFilter}
                  onChange={(value) => setInspectorFilter(value || "all")}
                  data={[
                    { value: "all", label: "전체 검사자" },
                    ...inspectors.map((inspector) => ({
                      value: inspector,
                      label: inspector,
                    })),
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3 }}>
                <DatePickerInput
                  type="range"
                  placeholder="검사 기간 선택"
                  value={dateRange}
                  onChange={setDateRange}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 2 }}>
                <Button
                  variant="light"
                  fullWidth
                  onClick={() => {
                    setSearchTerm("");
                    setStatusFilter("all");
                    setInspectorFilter("all");
                    setDateRange([null, null]);
                  }}
                >
                  초기화
                </Button>
              </Grid.Col>
            </Grid>
          </Stack>
        </Card>

        {/* Results Table */}
        <Card withBorder p="md">
          <Stack gap="md">
            <Group justify="space-between">
              <Text fw={500}>검사 결과 목록 ({filteredResults.length}건)</Text>
            </Group>

            <ScrollArea>
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>작업지시서</Table.Th>
                    <Table.Th>제품정보</Table.Th>
                    <Table.Th>검사일</Table.Th>
                    <Table.Th>검사자</Table.Th>
                    <Table.Th>합격/전체</Table.Th>
                    <Table.Th>결과</Table.Th>
                    <Table.Th>불량률</Table.Th>
                    <Table.Th>비고</Table.Th>
                    <Table.Th>작업</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
            </ScrollArea>

            <Group justify="center">
              <Pagination
                value={activePage}
                onChange={setActivePage}
                total={Math.ceil(filteredResults.length / 10)}
              />
            </Group>
          </Stack>
        </Card>

        {/* Quality Alerts */}
        <Card withBorder p="md" style={{ backgroundColor: "#fff3cd" }}>
          <Group justify="space-between">
            <Box>
              <Text fw={600} c="orange.8">
                품질 경고
              </Text>
              <Text size="sm" c="orange.7">
                최근 불량률이 증가하는 추세입니다. 품질관리 점검이 필요합니다.
              </Text>
            </Box>
            <Group>
              <Button
                color="orange"
                variant="light"
                leftSection={<Icon name="chart" />}
              >
                상세 분석
              </Button>
              <Button color="orange" leftSection={<Icon name="alert" />}>
                개선 조치
              </Button>
            </Group>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
