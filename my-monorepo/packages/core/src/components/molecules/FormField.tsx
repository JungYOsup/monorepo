import {
  NumberInput,
  Select,
  Stack,
  Switch,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { ReactNode } from "react";

export interface FormFieldProps {
  label: string;
  type?: "text" | "number" | "textarea" | "select" | "switch";
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  options?: { value: string; label: string }[];
  description?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  disabled?: boolean;
}

export function FormField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  options,
  description,
  leftSection,
  rightSection,
  disabled = false,
}: FormFieldProps) {
  const commonProps = {
    value,
    onChange,
    placeholder,
    required,
    error,
    disabled,
    style: { minHeight: "44px" },
  };

  const renderInput = () => {
    switch (type) {
      case "number":
        return (
          <NumberInput
            {...commonProps}
            onChange={(val) => onChange(val)}
            leftSection={leftSection}
            rightSection={rightSection}
          />
        );
      case "textarea":
        return <Textarea {...commonProps} minRows={3} autosize />;
      case "select":
        return (
          <Select
            {...commonProps}
            data={options || []}
            leftSection={leftSection}
            rightSection={rightSection}
          />
        );
      case "switch":
        return (
          <Switch
            checked={value}
            onChange={(event) => onChange(event.currentTarget.checked)}
            disabled={disabled}
            size="md"
          />
        );
      default:
        return (
          <TextInput
            {...commonProps}
            leftSection={leftSection}
            rightSection={rightSection}
          />
        );
    }
  };

  return (
    <Stack gap="xs">
      <Text size="sm" fw={500}>
        {label}
        {required && (
          <Text component="span" c="red">
            {" "}
            *
          </Text>
        )}
      </Text>
      {description && (
        <Text size="xs" c="dimmed">
          {description}
        </Text>
      )}
      {renderInput()}
    </Stack>
  );
}
