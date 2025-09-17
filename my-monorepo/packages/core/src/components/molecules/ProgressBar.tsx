import { Group, Progress, Stack, Text } from "@mantine/core";

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = "blue",
  size = "md",
}: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);

  return (
    <Stack gap="xs">
      {(label || showPercentage) && (
        <Group justify="space-between">
          {label && <Text size="sm">{label}</Text>}
          {showPercentage && (
            <Text size="sm" fw={500}>
              {percentage}%
            </Text>
          )}
        </Group>
      )}
      <Progress value={percentage} color={color} size={size} />
    </Stack>
  );
}
