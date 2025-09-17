import { Button, Group, Text } from "@mantine/core";

interface FooterProps {
  count: number;
  hasFilter: boolean;
}

export default function Footer({ count, hasFilter }: FooterProps) {
  return (
    <Group h="100%" justify="space-between" align="center">
      <Text size="sm" c="dimmed">
        총 {count}건
        {hasFilter && (
          <Text component="span" size="xs" c="blue" ml="xs">
            (필터 적용됨)
          </Text>
        )}
      </Text>
      <Button variant="light" size="sm" radius="md">
        더보기 +
      </Button>
    </Group>
  );
}
