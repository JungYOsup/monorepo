import { Icon } from "@core/components/atoms/Icon";
import { BaseModal } from "@core/components/molecules/BaseModal";
import { Box, Button, Group, Stack, Text } from "@mantine/core";

export interface InfoModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
  icon?: string;
  iconColor?: string;
  description?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function InfoModal({
  opened,
  onClose,
  title,
  message,
  buttonText = "확인",
  icon = "checkCircle",
  iconColor = "var(--factory-success)",
  description,
  size = "sm",
}: InfoModalProps) {
  return (
    <BaseModal opened={opened} onClose={onClose} title={title} size={size}>
      <Stack gap="md">
        <Group gap="md" align="flex-start">
          <Icon
            name={icon}
            size={24}
            style={{ color: iconColor, flexShrink: 0, marginTop: "2px" }}
          />
          <Box style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {message}
            </Text>
            {description && (
              <Text size="xs" c="dimmed" mt="xs">
                {description}
              </Text>
            )}
          </Box>
        </Group>

        <Group justify="center" mt="lg">
          <Button onClick={onClose}>{buttonText}</Button>
        </Group>
      </Stack>
    </BaseModal>
  );
}
