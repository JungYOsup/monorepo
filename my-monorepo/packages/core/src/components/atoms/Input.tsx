import { TextInput, TextInputProps } from "@mantine/core";

export interface InputProps extends TextInputProps {
  touchFriendly?: boolean;
}

export function Input({ touchFriendly = true, style, ...props }: InputProps) {
  const baseStyle = touchFriendly ? { minHeight: "44px", ...style } : style;

  return <TextInput style={baseStyle} {...props} />;
}
