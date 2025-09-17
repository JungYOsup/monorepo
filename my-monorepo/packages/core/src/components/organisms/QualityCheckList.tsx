import { Button } from "@core/components/atoms/Button";
import { Card, Group, Stack, Text, Textarea } from "@mantine/core";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Icon } from "../atoms/Icon";

export interface QualityCheckItem {
  id: string;
  description: string;
  category: "dimensional" | "visual" | "functional" | "safety";
  required: boolean;
  status: "pending" | "pass" | "fail";
  notes?: string;
}

export interface QualityCheckListProps {
  items: QualityCheckItem[];
  onItemUpdate: (id: string, status: "pass" | "fail", notes?: string) => void;
  onPhotoAdd?: (itemId: string) => void;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "dimensional":
      return "blue";
    case "visual":
      return "grape";
    case "functional":
      return "green";
    case "safety":
      return "red";
    default:
      return "gray";
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "dimensional":
      return "치수";
    case "visual":
      return "외관";
    case "functional":
      return "기능";
    case "safety":
      return "안전";
    default:
      return category;
  }
};

export function QualityCheckList({
  items,
  onItemUpdate,
  onPhotoAdd,
}: QualityCheckListProps) {
  const [notes, setNotes] = useState<Record<string, string>>({});

  const updateNotes = (id: string, value: string) => {
    setNotes((prev) => ({ ...prev, [id]: value }));
  };

  const handleStatusChange = (
    item: QualityCheckItem,
    status: "pass" | "fail"
  ) => {
    onItemUpdate(item.id, status, notes[item.id] || item.notes);
  };

  return (
    <Stack gap="md">
      {items.map((item) => (
        <Card key={item.id} withBorder padding="md">
          <Stack gap="sm">
            <Group justify="space-between" align="flex-start">
              <Stack gap="xs" style={{ flex: 1 }}>
                <Group gap="xs">
                  <Badge color={getCategoryColor(item.category)} size="sm">
                    {getCategoryLabel(item.category)}
                  </Badge>
                  {item.required && (
                    <Badge color="orange" size="sm">
                      필수
                    </Badge>
                  )}
                  {item.status !== "pending" && (
                    <Badge status={item.status} size="sm" />
                  )}
                </Group>
                <Text fw={500}>{item.description}</Text>
              </Stack>

              {item.status !== "pending" && (
                <Icon
                  name={item.status === "pass" ? "checkCircle" : "alert"}
                  color={item.status === "pass" ? "green" : "red"}
                />
              )}
            </Group>

            <Group gap="md">
              <Button
                variant={item.status === "pass" ? "filled" : "outline"}
                color="green"
                size="sm"
                leftSection={<Icon name="checkCircle" size={16} />}
                onClick={() => handleStatusChange(item, "pass")}
              >
                합격
              </Button>

              <Button
                variant={item.status === "fail" ? "filled" : "outline"}
                color="red"
                size="sm"
                leftSection={<Icon name="alert" size={16} />}
                onClick={() => handleStatusChange(item, "fail")}
              >
                불합격
              </Button>

              {onPhotoAdd && (
                <Button
                  variant="outline"
                  size="sm"
                  leftSection={<Icon name="camera" size={16} />}
                  onClick={() => onPhotoAdd(item.id)}
                >
                  사진
                </Button>
              )}
            </Group>

            {(item.status === "fail" || notes[item.id]) && (
              <Textarea
                placeholder="불합격 사유 또는 특이사항을 입력하세요..."
                value={notes[item.id] || item.notes || ""}
                onChange={(e) => updateNotes(item.id, e.currentTarget.value)}
                minRows={2}
              />
            )}
          </Stack>
        </Card>
      ))}
    </Stack>
  );
}
