import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
} from "@mantine/core";

export interface ButtonProps extends MantineButtonProps {
  touchFriendly?: boolean;
  onClick?: () => void;
}

export function Button({ touchFriendly = true, style, ...props }: ButtonProps) {
  const baseStyle = touchFriendly ? { minHeight: "44px", ...style } : style;

  return <MantineButton style={baseStyle} onClick={props.onClick} {...props} />;
}
