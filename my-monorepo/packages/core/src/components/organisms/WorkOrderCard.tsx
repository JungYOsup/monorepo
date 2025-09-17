import { Card, Grid, Group, Image, Stack, Text } from "@mantine/core";
import { Badge } from "../atoms/Badge";
import { ProgressBar } from "../molecules/ProgressBar";

export interface WorkOrderData {
  id: string;
  productName: string;
  productImage: string;
  lot: string;
  targetQuantity: number;
  currentQuantity: number;
  status: "pending" | "ongoing" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface WorkOrderCardProps {
  workOrder: WorkOrderData;
  onClick?: (workOrder: WorkOrderData) => void;
  viewMode?: "grid" | "list";
}

export function WorkOrderCard({
  workOrder,
  onClick,
  viewMode = "grid",
}: WorkOrderCardProps) {
  const progress = Math.round(
    (workOrder.currentQuantity / workOrder.targetQuantity) * 100
  );

  const cardContent = (
    <>
      <Image
        src={workOrder.productImage}
        alt={workOrder.productName}
        height={viewMode === "list" ? 80 : 160} // Reduced height for more items per screen
        fit="cover"
        radius="md"
        fallbackSrc="https://via.placeholder.com/400x160?text=Product+Image"
      />

      <Stack gap="sm">
        {" "}
        {/* Reduced gap for more compact layout */}
        <Group justify="space-between" wrap="nowrap">
          <Stack gap="xs" style={{ flex: 1 }}>
            <Group gap="xs">
              <Badge status={workOrder.status} />
              <Badge status={workOrder.priority} />
            </Group>
            <Text fw={600} lineClamp={2} size="sm">
              {workOrder.productName}
            </Text>{" "}
            {/* Smaller text */}
            <Text size="xs" c="dimmed">
              {" "}
              {/* Smaller text */}
              {workOrder.lot} • 마감: {workOrder.dueDate}
            </Text>
          </Stack>
        </Group>
        <ProgressBar
          value={workOrder.currentQuantity}
          max={workOrder.targetQuantity}
          label={`진행률: ${workOrder.currentQuantity}/${workOrder.targetQuantity}`}
          color={
            workOrder.status === "done"
              ? "green"
              : workOrder.status === "ongoing"
                ? "blue"
                : "gray"
          }
        />
      </Stack>
    </>
  );

  if (viewMode === "list") {
    return (
      <Card
        withBorder
        padding="md"
        style={{
          cursor: onClick ? "pointer" : "default",
          minHeight: 120, // Touch-friendly minimum height
          transition: "transform 0.1s ease, box-shadow 0.1s ease",
        }}
        onClick={() => onClick?.(workOrder)}
        styles={{
          root: {
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
            "&:active": {
              transform: "translateY(0px)",
            },
          },
        }}
      >
        <Grid>
          <Grid.Col span={3}>
            <Image
              src={workOrder.productImage}
              alt={workOrder.productName}
              height={80}
              fit="cover"
              radius="md"
              fallbackSrc="https://via.placeholder.com/200x80?text=Product"
            />
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack gap="sm">
              <Group gap="xs">
                <Badge status={workOrder.status} />
                <Badge status={workOrder.priority} />
              </Group>
              <Text fw={600} size="sm">
                {workOrder.productName}
              </Text>
              <Text size="xs" c="dimmed">
                {workOrder.lot} • 마감: {workOrder.dueDate}
              </Text>
              <ProgressBar
                value={workOrder.currentQuantity}
                max={workOrder.targetQuantity}
                label={`${workOrder.currentQuantity}/${workOrder.targetQuantity} 개`}
                color={
                  workOrder.status === "done"
                    ? "green"
                    : workOrder.status === "ongoing"
                      ? "blue"
                      : "gray"
                }
              />
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>
    );
  }

  return (
    <Card
      withBorder
      padding="md"
      style={{
        cursor: onClick ? "pointer" : "default",
        height: "100%",
        minHeight: 240, // Optimized height for ~10 items per tablet screen
        transition: "transform 0.1s ease, box-shadow 0.1s ease",
      }}
      onClick={() => onClick?.(workOrder)}
      styles={{
        root: {
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
          "&:active": {
            transform: "translateY(0px)",
          },
        },
      }}
    >
      <Card.Section>
        <Image
          src={workOrder.productImage}
          alt={workOrder.productName}
          height={160} // Reduced from 200 for more compact cards
          fit="cover"
          fallbackSrc="https://via.placeholder.com/400x160?text=Product+Image"
        />
      </Card.Section>

      <Stack gap="sm" mt="md">
        {" "}
        {/* Reduced gap and margin */}
        <Group gap="xs">
          <Badge status={workOrder.status} />
          <Badge status={workOrder.priority} />
        </Group>
        <Text fw={600} lineClamp={2} size="sm">
          {workOrder.productName}
        </Text>{" "}
        {/* Smaller text */}
        <Text size="xs" c="dimmed">
          {" "}
          {/* Smaller text */}
          {workOrder.lot} • 마감: {workOrder.dueDate}
        </Text>
        <ProgressBar
          value={workOrder.currentQuantity}
          max={workOrder.targetQuantity}
          label={`진행률: ${workOrder.currentQuantity}/${workOrder.targetQuantity}`}
          color={
            workOrder.status === "done"
              ? "green"
              : workOrder.status === "ongoing"
                ? "blue"
                : "gray"
          }
        />
      </Stack>
    </Card>
  );
}
