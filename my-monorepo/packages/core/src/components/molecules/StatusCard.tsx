import { Card, Group, Stack, Text } from "@mantine/core";
import { Badge } from "../atoms/Badge";

export interface StatusCardProps {
  title: string;
  value: string | number;
  status?:
    | "pending"
    | "ongoing"
    | "done"
    | "pass"
    | "fail"
    | "high"
    | "medium"
    | "low";
  subtitle?: string;
  color?: string;
}

export function StatusCard({
  title,
  value,
  status,
  subtitle,
  color,
}: StatusCardProps) {
  return (
    <Card withBorder padding="md" radius="md">
      <Stack gap="xs">
        <Group justify="space-between" align="flex-start">
          <Text size="sm" c="dimmed">
            {title}
          </Text>
          {status && <Badge status={status} size="sm" />}
        </Group>
        <Text size="xl" fw={600} c={color || "dark"}>
          {value}
        </Text>
        {subtitle && (
          <Text size="xs" c="dimmed">
            {subtitle}
          </Text>
        )}
      </Stack>
    </Card>
  );
}
