import {
  ActionIcon,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { StatusCard } from "../molecules/StatusCard";
import {
  QualityCheckItem,
  QualityCheckList,
} from "../organisms/QualityCheckList";

interface DefectPhoto {
  id: string;
  url: string;
  description: string;
  checkItemId?: string;
}

export interface QualityCheckTemplateProps {
  workOrderId: string;
}

export function QualityCheckTemplate({
  workOrderId,
}: QualityCheckTemplateProps) {
  const [checkItems, setCheckItems] = useState<QualityCheckItem[]>([
    {
      id: "1",
      description: "전체 치수가 허용 오차 범위 내(±0.1mm)",
      category: "dimensional",
      required: true,
      status: "pending",
    },
    {
      id: "2",
      description: "표면 마감 품질 - 긁힘이나 결함 없음",
      category: "visual",
      required: true,
      status: "pass",
    },
    {
      id: "3",
      description: "베어링 회전이 부드럽고 자유로움",
      category: "functional",
      required: true,
      status: "pending",
    },
    {
      id: "4",
      description: "토크 사양 확인 (45 Nm)",
      category: "functional",
      required: true,
      status: "pending",
    },
    {
      id: "5",
      description: "안전 마킹과 라벨이 선명하고 읽기 가능",
      category: "safety",
      required: true,
      status: "pending",
    },
    {
      id: "6",
      description: "포장 상태 점검",
      category: "visual",
      required: false,
      status: "pending",
    },
  ]);

  const [defectPhotos, setDefectPhotos] = useState<DefectPhoto[]>([]);
  const [generalComments, setGeneralComments] = useState("");
  const [inspectorNotes, setInspectorNotes] = useState("");

  const handleItemUpdate = (
    id: string,
    status: "pass" | "fail",
    notes?: string
  ) => {
    setCheckItems((items) =>
      items.map((item) => (item.id === id ? { ...item, status, notes } : item))
    );
  };

  const handlePhotoAdd = (itemId?: string) => {
    // Mock photo upload
    const newPhoto: DefectPhoto = {
      id: Date.now().toString(),
      url: "https://via.placeholder.com/300x200?text=Defect+Photo",
      description: "",
      checkItemId: itemId,
    };
    setDefectPhotos([...defectPhotos, newPhoto]);
  };

  const removePhoto = (photoId: string) => {
    setDefectPhotos((photos) => photos.filter((p) => p.id !== photoId));
  };

  const updatePhotoDescription = (photoId: string, description: string) => {
    setDefectPhotos((photos) =>
      photos.map((photo) =>
        photo.id === photoId ? { ...photo, description } : photo
      )
    );
  };

  const requiredPassed = checkItems.filter(
    (item) => item.required && item.status === "pass"
  ).length;
  const requiredTotal = checkItems.filter((item) => item.required).length;
  const allRequiredPassed = requiredPassed === requiredTotal;
  const hasFailures = checkItems.some((item) => item.status === "fail");

  const passedCount = checkItems.filter(
    (item) => item.status === "pass"
  ).length;
  const failedCount = checkItems.filter(
    (item) => item.status === "fail"
  ).length;
  const pendingCount = checkItems.filter(
    (item) => item.status === "pending"
  ).length;

  const handleSubmit = () => {
    const results = {
      checkItems,
      defectPhotos,
      generalComments,
      inspectorNotes,
      overallStatus: allRequiredPassed && !hasFailures ? "pass" : "fail",
      completedAt: new Date().toISOString(),
    };
    console.log("Quality check completed:", results);
  };

  return (
    <Container size="xl" p="md">
      <Stack gap="lg">
        <Group justify="space-between">
          <Text fw={700} size="xl">
            품질 검사
          </Text>
          <Badge status={allRequiredPassed && !hasFailures ? "pass" : "medium"}>
            필수 {requiredPassed}/{requiredTotal} 합격
          </Badge>
        </Group>

        {/* Progress Summary */}
        <Grid>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <StatusCard
              title="합격"
              value={passedCount}
              status="pass"
              subtitle="검사 통과"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <StatusCard
              title="불합격"
              value={failedCount}
              status="fail"
              subtitle="재검사 필요"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <StatusCard
              title="대기중"
              value={pendingCount}
              status="pending"
              subtitle="검사 필요"
            />
          </Grid.Col>
        </Grid>

        {/* Quality Check Items */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="checkCircle" />
            <Text fw={600}>검사 체크리스트</Text>
          </Group>
          <QualityCheckList
            items={checkItems}
            onItemUpdate={handleItemUpdate}
            onPhotoAdd={handlePhotoAdd}
          />
        </Card>

        {/* Defect Photos */}
        <Card withBorder p="lg">
          <Group justify="space-between" mb="md">
            <Group>
              <Icon name="camera" />
              <Text fw={600}>불량 사진 ({defectPhotos.length})</Text>
            </Group>
            <Button
              variant="outline"
              leftSection={<Icon name="upload" />}
              onClick={() => handlePhotoAdd()}
            >
              사진 추가
            </Button>
          </Group>

          {defectPhotos.length === 0 ? (
            <Stack align="center" py="xl">
              <Icon name="camera" size={48} color="gray" />
              <Text c="dimmed">업로드된 불량 사진이 없습니다</Text>
              <Text size="sm" c="dimmed">
                품질 이슈 발견 시 사진을 촬영해주세요
              </Text>
            </Stack>
          ) : (
            <Grid>
              {defectPhotos.map((photo) => (
                <Grid.Col key={photo.id} span={{ base: 12, md: 6 }}>
                  <Card withBorder>
                    <Card.Section pos="relative">
                      <Image
                        src={photo.url}
                        alt="불량 사진"
                        height={200}
                        fit="cover"
                      />
                      <ActionIcon
                        color="red"
                        variant="filled"
                        style={{ position: "absolute", top: 8, right: 8 }}
                        onClick={() => removePhoto(photo.id)}
                      >
                        <Icon name="close" size={16} />
                      </ActionIcon>
                    </Card.Section>
                    <Stack gap="sm" p="sm">
                      <Textarea
                        placeholder="불량 내용 설명..."
                        value={photo.description}
                        onChange={(e) =>
                          updatePhotoDescription(
                            photo.id,
                            e.currentTarget.value
                          )
                        }
                        minRows={2}
                        autosize
                      />
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          )}
        </Card>

        {/* General Comments */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="message" />
            <Text fw={600}>종합 의견</Text>
          </Group>
          <Stack gap="md">
            <Textarea
              placeholder="전반적인 품질 관찰사항, 권장사항 또는 특이사항..."
              value={generalComments}
              onChange={(e) => setGeneralComments(e.currentTarget.value)}
              minRows={4}
              autosize
            />

            <Text fw={500} size="sm">
              검사자 메모
            </Text>
            <Textarea
              placeholder="기술적 메모, 측정값, 구체적인 관찰사항..."
              value={inspectorNotes}
              onChange={(e) => setInspectorNotes(e.currentTarget.value)}
              minRows={3}
              autosize
            />
          </Stack>
        </Card>

        {/* Validation Warnings */}
        {(!allRequiredPassed || hasFailures) && (
          <Card
            withBorder
            p="lg"
            style={{ backgroundColor: "#fff3cd", borderColor: "#ffc107" }}
          >
            <Group>
              <Icon name="alert" color="orange" />
              <Stack gap="xs">
                <Text fw={600} c="orange.8">
                  품질 이슈 감지
                </Text>
                <Stack gap={0}>
                  {!allRequiredPassed && (
                    <Text size="sm" c="orange.7">
                      • {requiredTotal - requiredPassed}개 필수 검사항목이 아직
                      완료되지 않았습니다
                    </Text>
                  )}
                  {hasFailures && (
                    <Text size="sm" c="orange.7">
                      • {failedCount}개 검사항목이 불합격 처리되었습니다
                    </Text>
                  )}
                </Stack>
              </Stack>
            </Group>
          </Card>
        )}

        {/* Submit Button */}
        <Card withBorder p="lg" style={{ position: "sticky", bottom: 16 }}>
          <Button
            onClick={handleSubmit}
            size="lg"
            fullWidth
            color={allRequiredPassed && !hasFailures ? "green" : "red"}
            leftSection={<Icon name="checkCircle" />}
          >
            {allRequiredPassed && !hasFailures
              ? "품질 검사 완료 (합격)"
              : "품질 검사 완료 (불합격)"}
          </Button>
        </Card>
      </Stack>
    </Container>
  );
}
