import {
  Card,
  Container,
  Grid,
  Group,
  NumberInput,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useRef, useState } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { StatusCard } from "../molecules/StatusCard";
import { WorkOrderData } from "../organisms/WorkOrderCard";

export interface FinalReportTemplateProps {
  workOrderId: string;
  workOrderData: WorkOrderData;
}

export function FinalReportTemplate({
  workOrderId,
  workOrderData,
}: FinalReportTemplateProps) {
  const [completedQuantity, setCompletedQuantity] = useState(
    workOrderData?.targetQuantity || 0
  );
  const [defectiveQuantity, setDefectiveQuantity] = useState(0);
  const [finalComments, setFinalComments] = useState("");
  const [supervisorComments, setSupervisorComments] = useState("");
  const [signatureDate, setSignatureDate] = useState<string | null>("");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Mock summary data
  const reportSummary = {
    workOrderId: workOrderId || "WO-001",
    productName: "산업용 벵어링 어셈블리",
    lot: "LOT-2024-001",
    startTime: "08:00:00",
    endTime: "15:30:00",
    totalTime: "7시간 30분",
    targetQuantity: 500,
    qualityResults: {
      passed: 6,
      failed: 0,
      pending: 0,
    },
    materialsUsed: [
      { name: "스틸 샠프트 어셈블리", quantity: 1, status: "sufficient" },
      { name: "베어링 키트", quantity: 2, status: "sufficient" },
      { name: "실 키트", quantity: 1, status: "sufficient" },
    ],
    progressHistory: [
      { time: "09:00", progress: 25, status: "작업 시작" },
      { time: "11:30", progress: 50, status: "중간 점검" },
      { time: "14:00", progress: 75, status: "품질 검사" },
      { time: "15:30", progress: 100, status: "작업 완료" },
    ],
  };

  // Canvas drawing functions
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const handleSubmit = () => {
    // Convert canvas to base64 for signature
    const canvas = canvasRef.current;
    const signatureData = canvas?.toDataURL() || "";

    const reportData = {
      workOrderId,
      completedQuantity,
      defectiveQuantity,
      finalComments,
      supervisorComments,
      signature: signatureData,
      signatureDate: signatureDate,
      submittedAt: new Date().toISOString(),
      summary: reportSummary,
    };

    console.log("Final report submitted:", reportData);
  };

  const completionRate = Math.round(
    (completedQuantity / reportSummary.targetQuantity) * 100
  );
  const qualityRate =
    (reportSummary.qualityResults.passed /
      (reportSummary.qualityResults.passed +
        reportSummary.qualityResults.failed)) *
    100;

  return (
    <Container size="xl" p="md">
      <Stack gap="lg">
        <Text fw={700} size="xl">
          최종 보고서
        </Text>

        {/* Production Summary */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="fileText" />
            <Text fw={600}>생산 요약</Text>
          </Group>

          <Grid mb="lg">
            <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
              <StatusCard
                title="완료율"
                value={`${completionRate}%`}
                color="blue"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
              <StatusCard
                title="품질 합격률"
                value={`${Math.round(qualityRate)}%`}
                color="green"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
              <StatusCard
                title="총 소요시간"
                value={reportSummary.totalTime}
                color="purple"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
              <StatusCard
                title="완성품 수량"
                value={completedQuantity}
                color="orange"
              />
            </Grid.Col>
          </Grid>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="sm">
                <Text fw={500} size="sm">
                  작업지시서 상세
                </Text>
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      작업지시서:
                    </Text>
                    <Text size="sm">{reportSummary.workOrderId}</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      제품:
                    </Text>
                    <Text size="sm">{reportSummary.productName}</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      LOT:
                    </Text>
                    <Text size="sm">{reportSummary.lot}</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      시작:
                    </Text>
                    <Text size="sm">{reportSummary.startTime}</Text>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      완료:
                    </Text>
                    <Text size="sm">{reportSummary.endTime}</Text>
                  </Group>
                </Stack>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="sm">
                <Text fw={500} size="sm">
                  품질 검사 결과
                </Text>
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      합격:
                    </Text>
                    <Group gap="xs">
                      <Icon name="checkCircle" size={16} color="green" />
                      <Text size="sm" c="green">
                        {reportSummary.qualityResults.passed}
                      </Text>
                    </Group>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      불합격:
                    </Text>
                    <Group gap="xs">
                      <Icon name="close" size={16} color="red" />
                      <Text size="sm" c="red">
                        {reportSummary.qualityResults.failed}
                      </Text>
                    </Group>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                      대기중:
                    </Text>
                    <Group gap="xs">
                      <Icon name="clock" size={16} color="orange" />
                      <Text size="sm" c="orange">
                        {reportSummary.qualityResults.pending}
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>

        {/* Quantity Input */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="package" />
            <Text fw={600}>최종 수량</Text>
          </Group>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xs">
                <Text size="sm" fw={500}>
                  완성품 수량
                </Text>
                <NumberInput
                  value={completedQuantity}
                  onChange={(value) => setCompletedQuantity(Number(value))}
                  min={0}
                  max={reportSummary.targetQuantity}
                  size="lg"
                />
                <Text size="sm" c="dimmed">
                  목표: {reportSummary.targetQuantity} 개
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xs">
                <Text size="sm" fw={500}>
                  불량/반품 수량
                </Text>
                <NumberInput
                  value={defectiveQuantity}
                  onChange={(value) => setDefectiveQuantity(Number(value))}
                  min={0}
                  size="lg"
                />
                <Text size="sm" c="dimmed">
                  품질 검사 불합격 제품
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>

          {defectiveQuantity > 0 && (
            <Card
              withBorder
              mt="md"
              p="md"
              style={{ backgroundColor: "#fff3cd" }}
            >
              <Group>
                <Icon name="alert" color="orange" />
                <Stack gap={0}>
                  <Text fw={500} c="orange.8">
                    불량품 보고
                  </Text>
                  <Text size="sm" c="orange.7">
                    불량품이 적절히 문서화되고 분리되었는지 확인하세요.
                  </Text>
                </Stack>
              </Group>
            </Card>
          )}
        </Card>

        {/* Materials Summary */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="package" />
            <Text fw={600}>사용 자재</Text>
          </Group>
          <Grid>
            {reportSummary.materialsUsed.map((material, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                <Card withBorder p="sm" style={{ backgroundColor: "#f8f9fa" }}>
                  <Group justify="space-between">
                    <Text size="sm">{material.name}</Text>
                    <Group gap="xs">
                      <Text size="sm" c="dimmed">
                        수량: {material.quantity}
                      </Text>
                      <Badge
                        color={
                          material.status === "sufficient" ? "green" : "red"
                        }
                        size="sm"
                      >
                        {material.status === "sufficient" ? "충분" : "부족"}
                      </Badge>
                    </Group>
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Card>

        {/* Comments */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="message" />
            <Text fw={600}>최종 의견</Text>
          </Group>

          <Stack gap="md">
            <Stack gap="xs">
              <Text size="sm" fw={500}>
                작업자 의견
              </Text>
              <Textarea
                placeholder="전반적인 관찰사항, 발생한 문제점, 개선사항 제안..."
                value={finalComments}
                onChange={(e) => setFinalComments(e.currentTarget.value)}
                minRows={4}
                autosize
              />
            </Stack>

            <Stack gap="xs">
              <Text size="sm" fw={500}>
                감독자 검토
              </Text>
              <Textarea
                placeholder="감독자 메모, 승인사항, 추가 관찰사항..."
                value={supervisorComments}
                onChange={(e) => setSupervisorComments(e.currentTarget.value)}
                minRows={3}
                autosize
              />
            </Stack>
          </Stack>
        </Card>

        {/* Digital Signature */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="signature" />
            <Text fw={600}>전자 서명</Text>
          </Group>

          <Stack gap="md">
            <Stack gap="xs">
              <Text size="sm" fw={500}>
                서명
              </Text>
              <Card withBorder p="md" style={{ backgroundColor: "#f8f9fa" }}>
                <canvas
                  ref={canvasRef}
                  width={500}
                  height={150}
                  style={{
                    width: "100%",
                    height: "150px",
                    border: "2px dashed #ced4da",
                    borderRadius: "8px",
                    cursor: "crosshair",
                    backgroundColor: "white",
                  }}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                />
                <Group justify="space-between" mt="sm">
                  <Text size="sm" c="dimmed">
                    위에 서명하여 보고서를 승인하세요
                  </Text>
                  <Button variant="outline" size="sm" onClick={clearSignature}>
                    지우기
                  </Button>
                </Group>
              </Card>
            </Stack>

            <Stack gap="xs">
              <Text size="sm" fw={500}>
                서명 날짜
              </Text>
              <DateInput
                value={signatureDate}
                onChange={setSignatureDate}
                size="lg"
                style={{ maxWidth: 200 }}
              />
            </Stack>
          </Stack>
        </Card>

        {/* Validation */}
        {(completedQuantity > reportSummary.targetQuantity ||
          completedQuantity < 0) && (
          <Card
            withBorder
            p="lg"
            style={{ backgroundColor: "#f8d7da", borderColor: "#dc3545" }}
          >
            <Group>
              <Icon name="alert" color="red" />
              <Stack gap="xs">
                <Text fw={600} c="red.8">
                  잘못된 수량
                </Text>
                <Text size="sm" c="red.7">
                  완성품 수량은 목표 수량을 초과하거나 음수일 수 없습니다.
                </Text>
              </Stack>
            </Group>
          </Card>
        )}

        {/* Submit Actions */}
        <Stack gap="sm">
          <Button
            onClick={handleSubmit}
            size="lg"
            fullWidth
            leftSection={<Icon name="send" />}
            disabled={
              completedQuantity > reportSummary.targetQuantity ||
              completedQuantity < 0
            }
          >
            최종 보고서 제출
          </Button>

          <Group grow>
            <Button
              variant="outline"
              size="lg"
              leftSection={<Icon name="download" />}
            >
              PDF 내보내기
            </Button>
            <Button
              variant="outline"
              size="lg"
              leftSection={<Icon name="fileText" />}
            >
              임시저장
            </Button>
          </Group>
        </Stack>
      </Stack>
    </Container>
  );
}
