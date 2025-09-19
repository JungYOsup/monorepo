import { Modal } from "@mantine/core";
import { ReactNode } from "react";

export interface BaseModalProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  centered?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  children: ReactNode;
}

export function BaseModal({
  opened,
  onClose,
  title,
  size = "sm",
  centered = true,
  closeOnClickOutside = true,
  closeOnEscape = true,
  children,
}: BaseModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      size={size}
      centered={centered}
      closeOnClickOutside={closeOnClickOutside}
      closeOnEscape={closeOnEscape}
      styles={{
        title: {
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--factory-primary)",
        },
        header: {
          borderBottom: "1px solid #e9ecef",
          paddingBottom: "12px",
          marginBottom: "16px",
        },
        body: {
          padding: "20px",
        },
      }}
    >
      {children}
    </Modal>
  );
}
