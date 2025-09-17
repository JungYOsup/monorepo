import { BadgeProps, Badge as MantineBadge } from "@mantine/core";

export interface CustomBadgeProps extends BadgeProps {
  status?:
    | "pending"
    | "ongoing"
    | "done"
    | "pass"
    | "fail"
    | "high"
    | "medium"
    | "low"
    | "sufficient"
    | "insufficient"
    | "excess"
    | "waiting"
    | "paused";
}

export function Badge({ status, color, ...props }: CustomBadgeProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "pending":
        return "yellow";
      case "ongoing":
        return "blue";
      case "done":
        return "green";
      case "pass":
        return "green";
      case "fail":
        return "red";
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      case "sufficient":
        return "green";
      case "insufficient":
        return "orange";
      case "excess":
        return "red";
      case "waiting":
        return "gray";
      default:
        return color || "gray";
    }
  };

  return <MantineBadge color={getStatusColor(status)} {...props} />;
}
