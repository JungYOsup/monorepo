import {
  ActionIcon,
  Box,
  Flex,
  Group,
  Select,
  Stack,
  Title,
} from "@mantine/core";
import { IconFilter, IconListSearch } from "@tabler/icons-react";

interface HeaderProps {
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
  selectedWorkOrder: string | null;
  setSelectedWorkOrder: (v: string | null) => void;
  workOrderOptions: { value: string; label: string }[];
}

export default function Header({
  showFilters,
  setShowFilters,
  selectedWorkOrder,
  setSelectedWorkOrder,
  workOrderOptions,
}: HeaderProps) {
  return (
    <Stack gap="sm" h="100%" justify="center">
      <Group h="60px" justify="space-between" align="center">
        <Title order={2} c="dark">
          작업지시서
        </Title>
        <ActionIcon
          variant="light"
          color="gray"
          size="lg"
          radius="md"
          onClick={() => setShowFilters(!showFilters)}
        >
          <IconFilter size={18} />
        </ActionIcon>
      </Group>

      {showFilters && (
        <Box pb="md">
          <Flex
            gap="md"
            direction={{ base: "column", sm: "row" }}
            align={{ base: "stretch", sm: "flex-end" }}
          >
            <Box flex={1}>
              <Select
                label="작업지시서 검색"
                placeholder="작업지시서를 선택하세요"
                data={workOrderOptions}
                value={selectedWorkOrder}
                onChange={setSelectedWorkOrder}
                leftSection={<IconListSearch size={16} />}
                clearable
                searchable
                size="sm"
                radius="md"
                style={{ minWidth: "250px" }}
                maxDropdownHeight={200}
              />
            </Box>
          </Flex>
        </Box>
      )}
    </Stack>
  );
}
