import { Icon } from "@core/components/atoms/Icon";
import { BaseModal } from "@core/components/molecules/BaseModal";
import { Box, Button, Group, Stack, Text } from "@mantine/core";

export interface ConfirmationModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  icon?: string;
  iconColor?: string;
  description?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function ConfirmationModal({
  opened,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "확인",
  cancelText = "취소",
  confirmColor = "red",
  icon = "alertTriangle",
  iconColor = "var(--factory-warning)",
  description,
  size = "sm",
}: ConfirmationModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

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

        <Group justify="flex-end" gap="sm" mt="lg">
          <Button variant="subtle" onClick={onClose}>
            {cancelText}
          </Button>
          <Button color={confirmColor} onClick={handleConfirm}>
            {confirmText}
          </Button>
        </Group>
      </Stack>
    </BaseModal>
  );
}
