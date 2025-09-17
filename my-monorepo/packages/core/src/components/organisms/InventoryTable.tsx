import {
  ActionIcon,
  Group,
  Pagination,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Icon } from "../atoms/Icon";

export interface InventoryItem {
  id: string;
  partNumber: string;
  name: string;
  category: string;
  currentStock: number;
  minimumStock: number;
  unit: string;
  location: string;
  lastUpdated: string;
  status: "sufficient" | "low" | "critical";
}

export interface InventoryTableProps {
  data: InventoryItem[];
  onFilter?: (filters: any) => void;
  onSort?: (sortBy: string, order: "asc" | "desc") => void;
}

const mockData: InventoryItem[] = [
  {
    id: "1",
    partNumber: "SA-001",
    name: "스틸 샤프트 어셈블리",
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
];

export function InventoryTable({
  data = mockData,
  onFilter,
  onSort,
}: InventoryTableProps) {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sufficient":
        return "green";
      case "low":
        return "yellow";
      case "critical":
        return "red";
      default:
        return "gray";
    }
  };

  const rows = data.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Text size="sm" fw={500}>
          {item.partNumber}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{item.name}</Text>
      </Table.Td>
      <Table.Td>
        <Badge color="gray" size="sm">
          {item.category}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <Text size="sm" fw={500} c={getStatusColor(item.status)}>
            {item.currentStock}
          </Text>
          <Text size="sm" c="dimmed">
            / {item.minimumStock}
          </Text>
          <Text size="sm" c="dimmed">
            {item.unit}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Badge color={getStatusColor(item.status)} size="sm">
          {item.status === "sufficient"
            ? "충분"
            : item.status === "low"
              ? "부족"
              : "긴급"}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{item.location}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" c="dimmed">
          {item.lastUpdated}
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon variant="light" size="sm">
            <Icon name="edit" size={14} />
          </ActionIcon>
          <ActionIcon variant="light" color="red" size="sm">
            <Icon name="trash" size={14} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <ScrollArea>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>부품번호</Table.Th>
              <Table.Th>부품명</Table.Th>
              <Table.Th>카테고리</Table.Th>
              <Table.Th>재고량</Table.Th>
              <Table.Th>상태</Table.Th>
              <Table.Th>위치</Table.Th>
              <Table.Th>업데이트</Table.Th>
              <Table.Th>작업</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>

      <Group justify="center" mt="lg">
        <Pagination
          value={activePage}
          onChange={setActivePage}
          total={Math.ceil(data.length / itemsPerPage)}
        />
      </Group>
    </>
  );
}
