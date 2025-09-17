import {
  Card,
  Container,
  Grid,
  Group,
  Image,
  List,
  Stack,
  Text,
} from "@mantine/core";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../molecules/ProgressBar";
import { StatusCard } from "../molecules/StatusCard";
import { WorkOrderData } from "../organisms/WorkOrderCard";

export interface WorkOrderDetailTemplateProps {
  workOrder: WorkOrderData;
  onStartWork: () => void;
}

export function WorkOrderDetailTemplate({
  workOrder,
  onStartWork,
}: WorkOrderDetailTemplateProps) {
  // Mock detailed data
  const detailedData = {
    estimatedTime: "4시간",
    assignedWorkers: ["김철수", "이영희"],
    instructions: [
      "작업 공간 준비 및 도구 점검",
      "원재료 품질 검사 실시",
      "기술도면 TD-001에 따른 조립 순서 준수",
      "토크 사양: 메인 볼트 45Nm, 보조 볼트 25Nm",
      "각 조립 단계 후 육안 검사 실시",
      "포장 전 최종 품질 점검 완료",
    ],
    safetyNotes: [
      "안전 보안경과 안전화 착용 필수",
      "25kg 초과 부품은 적절한 리프팅 기법 사용",
      "기계 작동 전 안전 가드 설치 확인",
      "장비 이상 발견 시 즉시 보고",
      "작업 공간을 깨끗하고 정리된 상태 유지",
    ],
    materials: [
      "스틸 샤프트 어셈블리 - SA-001 (수량: 1)",
      "베어링 키트 - BK-205 (수량: 2)",
      "실 키트 - SK-301 (수량: 1)",
      "볼트 세트 M12x40 - BS-M12 (수량: 8)",
      "윤활유 Grade 2 - LG-002 (500ml)",
    ],
  };

  return (
    <Container size="xl" p="md">
      <Stack gap="lg">
        {/* Header */}
        <Group justify="space-between" align="center">
          <Stack gap={0}>
            <Text fw={700} size="xl">
              {workOrder.productName}
            </Text>
            <Text c="dimmed">
              {workOrder.id} • {workOrder.lot}
            </Text>
          </Stack>
        </Group>

        <Grid>
          {/* Product Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="lg">
              <Image
                src={workOrder.productImage}
                alt={workOrder.productName}
                height={300}
                fit="cover"
                radius="md"
                fallbackSrc="https://via.placeholder.com/400x300?text=Product+Image"
              />
            </Card>
          </Grid.Col>

          {/* Work Order Info */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Card withBorder p="lg">
                <Text fw={600} mb="md">
                  작업지시서 상세 정보
                </Text>

                <Stack gap="md">
                  <Group>
                    <Badge status={workOrder.status} />
                    <Badge status={workOrder.priority} />
                  </Group>

                  <Grid>
                    <Grid.Col span={6}>
                      <StatusCard
                        title="목표 수량"
                        value={`${workOrder.targetQuantity} 개`}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <StatusCard title="마감일" value={workOrder.dueDate} />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <StatusCard
                        title="예상 시간"
                        value={detailedData.estimatedTime}
                      />
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <StatusCard
                        title="작업자"
                        value={`${detailedData.assignedWorkers.length}명`}
                        subtitle={detailedData.assignedWorkers.join(", ")}
                      />
                    </Grid.Col>
                  </Grid>

                  <ProgressBar
                    value={workOrder.currentQuantity}
                    max={workOrder.targetQuantity}
                    label="진행률"
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
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Instructions and Safety */}
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Card withBorder p="lg">
              <Group mb="md">
                <Icon name="fileText" />
                <Text fw={600}>작업 지시사항</Text>
              </Group>
              <List spacing="sm" size="sm">
                {detailedData.instructions.map((instruction, index) => (
                  <List.Item key={index}>{instruction}</List.Item>
                ))}
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Card withBorder p="lg">
              <Group mb="md">
                <Icon name="alert" color="red" />
                <Text fw={600} c="red">
                  안전 수칙
                </Text>
              </Group>
              <List spacing="sm" size="sm">
                {detailedData.safetyNotes.map((note, index) => (
                  <List.Item
                    key={index}
                    icon={<Icon name="alert" size={12} color="red" />}
                  >
                    {note}
                  </List.Item>
                ))}
              </List>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Required Materials */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="package" />
            <Text fw={600}>필요 자재</Text>
          </Group>
          <Grid>
            {detailedData.materials.map((material, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                <Text
                  size="sm"
                  p="sm"
                  style={{ backgroundColor: "#f8f9fa", borderRadius: 8 }}
                >
                  {material}
                </Text>
              </Grid.Col>
            ))}
          </Grid>
        </Card>

        {/* Start Work Button */}
        <Card withBorder p="lg" style={{ backgroundColor: "#e3f2fd" }}>
          <Group justify="space-between" align="center">
            <Stack gap="xs">
              <Text fw={600} size="lg">
                작업 시작 준비
              </Text>
              <Text size="sm" c="dimmed">
                모든 지시사항과 안전 수칙을 확인한 후 작업을 시작하세요.
              </Text>
            </Stack>
            <Button
              size="lg"
              leftSection={<Icon name="play" />}
              onClick={onStartWork}
              disabled={workOrder.status === "done"}
              style={{ minWidth: 200 }}
            >
              {workOrder.status === "pending"
                ? "작업 시작"
                : workOrder.status === "ongoing"
                  ? "작업 계속"
                  : "작업 완료"}
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
