import {
  Card,
  Container,
  Grid,
  Group,
  NumberInput,
  Stack,
  Switch,
  Text,
  Textarea,
} from "@mantine/core";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { ProgressBar } from "../molecules/ProgressBar";

export interface ProgressTemplateProps {
  workOrderId: string;
}

export function ProgressTemplate({ workOrderId }: ProgressTemplateProps) {
  const [progress, setProgress] = useState(45);
  const [status, setStatus] = useState<
    "waiting" | "ongoing" | "paused" | "done"
  >("ongoing");
  const [comments, setComments] = useState("");
  const [elapsedTime] = useState("02:45:30");

  const handleStatusChange = (
    newStatus: "waiting" | "ongoing" | "paused" | "done"
  ) => {
    setStatus(newStatus);
  };

  const handleSave = () => {
    console.log("Progress saved:", { progress, status, comments });
  };

  const progressHistory = [
    { time: "14:30", progress: 45, status: "ongoing", note: "조립 1단계 완료" },
    {
      time: "13:15",
      progress: 30,
      status: "paused",
      note: "자재 검사로 인한 일시 정지",
    },
    {
      time: "12:00",
      progress: 25,
      status: "ongoing",
      note: "메인 조립 프로세스 시작",
    },
  ];

  return (
    <Container size="xl" p="md">
      <Stack gap="lg">
        <Group justify="space-between">
          <Text fw={700} size="xl">
            작업 진행 입력
          </Text>
          <Badge status={status} />
        </Group>

        {/* Timer Card */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="clock" />
            <Text fw={600}>작업 타이머</Text>
          </Group>

          <Stack align="center" gap="md">
            <Text
              size="48px"
              fw={700}
              c="blue"
              style={{ fontFamily: "monospace" }}
            >
              {elapsedTime}
            </Text>

            <Group gap="md">
              <Button
                variant={status === "ongoing" ? "filled" : "outline"}
                size="lg"
                leftSection={<Icon name="play" />}
                onClick={() => handleStatusChange("ongoing")}
                style={{ minWidth: 120 }}
              >
                시작
              </Button>

              <Button
                variant={status === "paused" ? "filled" : "outline"}
                size="lg"
                leftSection={<Icon name="pause" />}
                onClick={() => handleStatusChange("paused")}
                style={{ minWidth: 120 }}
              >
                일시정지
              </Button>

              <Button
                variant={status === "waiting" ? "filled" : "outline"}
                size="lg"
                leftSection={<Icon name="square" />}
                onClick={() => handleStatusChange("waiting")}
                style={{ minWidth: 120 }}
              >
                정지
              </Button>
            </Group>
          </Stack>
        </Card>

        {/* Progress Card */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="trendingUp" />
            <Text fw={600}>작업 진행률</Text>
          </Group>

          <Stack gap="lg">
            <Group justify="space-between" align="center">
              <Text>진행률</Text>
              <Text size="xl" fw={700} c="blue">
                {progress}%
              </Text>
            </Group>

            <ProgressBar value={progress} color="blue" size="lg" />

            <Group>
              <NumberInput
                value={progress}
                onChange={(value) => setProgress(Number(value))}
                min={0}
                max={100}
                style={{ width: 120 }}
                placeholder="0-100"
                size="lg"
              />

              <Group gap="sm">
                <Button
                  variant="outline"
                  onClick={() => setProgress(Math.max(0, progress - 5))}
                >
                  -5%
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setProgress(Math.min(100, progress + 5))}
                >
                  +5%
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setProgress(Math.min(100, progress + 25))}
                >
                  +25%
                </Button>
              </Group>
            </Group>

            <Grid>
              {[25, 50, 75, 100].map((percent) => (
                <Grid.Col key={percent} span={3}>
                  <Button
                    variant={progress === percent ? "filled" : "outline"}
                    onClick={() => setProgress(percent)}
                    fullWidth
                  >
                    {percent}%
                  </Button>
                </Grid.Col>
              ))}
            </Grid>

            <Card withBorder p="md" style={{ backgroundColor: "#f8f9fa" }}>
              <Group justify="space-between">
                <Stack gap={0}>
                  <Text fw={500}>100% 달성 시 자동 완료</Text>
                  <Text size="sm" c="dimmed">
                    진행률이 100%에 도달하면 자동으로 '완료' 상태로 변경됩니다
                  </Text>
                </Stack>
                <Switch
                  checked={progress === 100 && status === "done"}
                  onChange={(event) => {
                    if (event.currentTarget.checked && progress === 100) {
                      setStatus("done");
                    }
                  }}
                />
              </Group>
            </Card>
          </Stack>
        </Card>

        {/* Comments Card */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="message" />
            <Text fw={600}>작업자 코멘트</Text>
          </Group>

          <Stack gap="md">
            <Textarea
              placeholder="진행 상황, 발생한 문제, 다음 단계 계획 등을 입력하세요..."
              value={comments}
              onChange={(e) => setComments(e.currentTarget.value)}
              minRows={4}
              autosize
            />

            <Card withBorder p="md" style={{ backgroundColor: "#e3f2fd" }}>
              <Group>
                <Icon name="alert" color="blue" />
                <Stack gap={0}>
                  <Text size="sm" fw={500} c="blue">
                    작업 팁
                  </Text>
                  <Text size="sm" c="blue">
                    문제점, 품질 관찰사항, 개선 제안사항 등을 상세히
                    기록해주세요.
                  </Text>
                </Stack>
              </Group>
            </Card>
          </Stack>
        </Card>

        {/* Recent Progress History */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="clock" />
            <Text fw={600}>최근 진행 이력</Text>
          </Group>

          <Stack gap="sm">
            {progressHistory.map((update, index) => (
              <Card
                key={index}
                withBorder
                p="md"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <Group justify="space-between">
                  <Group>
                    <Text size="sm" fw={500} style={{ minWidth: 60 }}>
                      {update.time}
                    </Text>
                    <Text size="sm">{update.progress}%</Text>
                    <Badge status={update.status as any} size="sm" />
                  </Group>
                </Group>
                <Text size="sm" c="dimmed" mt="xs">
                  {update.note}
                </Text>
              </Card>
            ))}
          </Stack>
        </Card>

        {/* Save Button */}
        <Card withBorder p="lg" style={{ position: "sticky", bottom: 16 }}>
          <Button
            onClick={handleSave}
            size="lg"
            fullWidth
            leftSection={<Icon name="checkCircle" />}
          >
            진행 상황 저장
          </Button>
        </Card>
      </Stack>
    </Container>
  );
}
