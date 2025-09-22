import { Box, Button, Group, Stack, Text } from "@mantine/core";
import { Icon } from "../atoms/Icon";
import { BaseModal } from "./BaseModal";

export interface InfoModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm?: () => void; // ModalManager 호환성을 위해 추가
  title: string;
  message: string;
  confirmText?: string; // buttonText 대신 confirmText 사용
  icon?: string;
  iconColor?: string;
  description?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function InfoModal({
  opened,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "확인",
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
          <Button onClick={onConfirm || onClose}>{confirmText}</Button>
        </Group>
      </Stack>
    </BaseModal>
  );
}
