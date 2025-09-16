import { ImageWithFallback } from "@core/util/ImageWithFallback";
import { AspectRatio, Badge, Card, Group, Stack, Text } from "@mantine/core";

const getStatusColor = (status: string) => {
  switch (status) {
    case "대기":
      return "gray";
    case "진행중":
      return "blue";
    case "완료":
      return "green";
    default:
      return "gray";
  }
};

interface WorkOrderCardProps {
  id: string;
  itemName: string;
  workName: string;
  quantity: string;
  equipment: string;
  dueDate: string;
  status: string;
  image: string;
}

export default function WorkOrderCard({
  id,
  itemName,
  workName,
  quantity,
  equipment,
  dueDate,
  status,
  image,
}: WorkOrderCardProps) {
  return (
    <Card
      key={id}
      shadow="sm"
      padding="md"
      radius="lg"
      withBorder
      style={{ cursor: "pointer" }}
    >
      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <ImageWithFallback
            src={image}
            alt={itemName}
            style={{ height: 120, objectFit: "cover" }}
          />
        </AspectRatio>
      </Card.Section>

      <Stack gap="xs" mt="md">
        <Text fw={700} size="sm" c="dark">
          {id}
        </Text>
        <Text size="sm" c="dimmed">
          {itemName} / {workName}
        </Text>

        <Group justify="space-between">
          <Text size="xs" c="dimmed">
            수량: {quantity}
          </Text>
          <Text size="xs" c="dimmed">
            {equipment}
          </Text>
        </Group>

        <Text size="xs" c="dimmed">
          예정일: {dueDate}
        </Text>

        <Group justify="flex-end" mt="xs">
          <Badge
            color={getStatusColor(status)}
            variant="light"
            size="sm"
            radius="sm"
          >
            {status}
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
}
