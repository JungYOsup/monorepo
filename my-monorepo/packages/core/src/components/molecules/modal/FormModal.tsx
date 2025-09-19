import { BaseModal } from "@core/components/molecules/BaseModal";
import { Button, Group, Stack } from "@mantine/core";
import { ReactNode } from "react";

export interface FormModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  children: ReactNode;
  submitText?: string;
  cancelText?: string;
  submitColor?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isSubmitting?: boolean;
  submitDisabled?: boolean;
}

export function FormModal({
  opened,
  onClose,
  onSubmit,
  title,
  children,
  submitText = "저장",
  cancelText = "취소",
  submitColor = "blue",
  size = "md",
  isSubmitting = false,
  submitDisabled = false,
}: FormModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      title={title}
      size={size}
      closeOnClickOutside={!isSubmitting}
      closeOnEscape={!isSubmitting}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
          {children}

          <Group justify="flex-end" gap="sm" mt="lg">
            <Button variant="subtle" onClick={onClose} disabled={isSubmitting}>
              {cancelText}
            </Button>
            <Button
              type="submit"
              color={submitColor}
              loading={isSubmitting}
              disabled={submitDisabled}
            >
              {submitText}
            </Button>
          </Group>
        </Stack>
      </form>
    </BaseModal>
  );
}
