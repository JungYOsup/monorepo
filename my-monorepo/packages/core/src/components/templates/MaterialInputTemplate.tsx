import {
  ActionIcon,
  Card,
  Container,
  Grid,
  Group,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Input } from "../atoms/Input";
import { StatusCard } from "../molecules/StatusCard";

interface Material {
  id: string;
  partNumber: string;
  name: string;
  scannedQuantity: number;
  requiredQuantity: number;
  batchNumber?: string;
  timestamp: string;
  status: "sufficient" | "insufficient" | "excess";
}

export interface MaterialInputTemplateProps {
  workOrderId: string;
}

export function MaterialInputTemplate({
  workOrderId,
}: MaterialInputTemplateProps) {
  const [barcodeInput, setBarcodeInput] = useState("");
  const [manualPartNumber, setManualPartNumber] = useState("");
  const [manualQuantity, setManualQuantity] = useState("");
  const [scanMode, setScanMode] = useState<"barcode" | "manual">("barcode");

  // Mock required materials
  const requiredMaterials = [
    { partNumber: "SA-001", name: "스틸 샤프트 어셈블리", quantity: 1 },
    { partNumber: "BK-205", name: "베어링 키트", quantity: 2 },
    { partNumber: "SK-301", name: "실 키트", quantity: 1 },
    { partNumber: "BS-M12", name: "볼트 세트 M12x40", quantity: 8 },
    { partNumber: "LG-002", name: "윤활유 Grade 2", quantity: 1 },
  ];

  const [scannedMaterials, setScannedMaterials] = useState<Material[]>([
    {
      id: "1",
      partNumber: "SA-001",
      name: "스틸 샤프트 어셈블리",
      scannedQuantity: 1,
      requiredQuantity: 1,
      batchNumber: "B2024-001",
      timestamp: "09:30:15",
      status: "sufficient",
    },
    {
      id: "2",
      partNumber: "BK-205",
      name: "베어링 키트",
      scannedQuantity: 1,
      requiredQuantity: 2,
      batchNumber: "B2024-125",
      timestamp: "09:32:22",
      status: "insufficient",
    },
  ]);

  const handleBarcodeSubmit = () => {
    if (!barcodeInput.trim()) return;

    // Mock barcode processing
    console.log("Barcode scanned:", barcodeInput);
    setBarcodeInput("");
  };

  const handleManualAdd = () => {
    if (!manualPartNumber.trim() || !manualQuantity.trim()) return;

    console.log("Manual entry:", {
      partNumber: manualPartNumber,
      quantity: manualQuantity,
    });
    setManualPartNumber("");
    setManualQuantity("");
  };

  const handleEdit = (id: string, newQuantity: number) => {
    setScannedMaterials((materials) =>
      materials.map((material) =>
        material.id === id
          ? {
              ...material,
              scannedQuantity: newQuantity,
              status:
                newQuantity >= material.requiredQuantity
                  ? "sufficient"
                  : newQuantity > material.requiredQuantity
                    ? "excess"
                    : "insufficient",
            }
          : material
      )
    );
  };

  const handleDelete = (id: string) => {
    setScannedMaterials((materials) => materials.filter((m) => m.id !== id));
  };

  const sufficientCount = scannedMaterials.filter(
    (m) => m.status === "sufficient"
  ).length;
  const insufficientCount = scannedMaterials.filter(
    (m) => m.status === "insufficient"
  ).length;
  const excessCount = scannedMaterials.filter(
    (m) => m.status === "excess"
  ).length;

  return (
    <Container size="xl" p="md">
      <Stack gap="lg">
        <Text fw={700} size="xl">
          원부자재 투입
        </Text>

        {/* Input Mode Toggle */}
        <Card withBorder p="lg">
          <Stack gap="md">
            <SegmentedControl
              value={scanMode}
              onChange={(value) => setScanMode(value as "barcode" | "manual")}
              data={[
                {
                  label: (
                    <Group gap="sm">
                      <Icon name="scan" />
                      <Text>바코드 스캔</Text>
                    </Group>
                  ),
                  value: "barcode",
                },
                {
                  label: (
                    <Group gap="sm">
                      <Icon name="plus" />
                      <Text>수동 입력</Text>
                    </Group>
                  ),
                  value: "manual",
                },
              ]}
              fullWidth
            />

            {scanMode === "barcode" ? (
              <Stack gap="md">
                <Input
                  placeholder="바코드를 스캔하거나 수동 입력..."
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.currentTarget.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleBarcodeSubmit()}
                  leftSection={<Icon name="scan" />}
                  size="lg"
                />
                <Button
                  onClick={handleBarcodeSubmit}
                  disabled={!barcodeInput.trim()}
                  size="lg"
                  fullWidth
                >
                  스캔 처리
                </Button>
              </Stack>
            ) : (
              <Stack gap="md">
                <Grid>
                  <Grid.Col span={6}>
                    <Input
                      placeholder="부품번호"
                      value={manualPartNumber}
                      onChange={(e) =>
                        setManualPartNumber(e.currentTarget.value)
                      }
                      size="lg"
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Input
                      placeholder="수량"
                      value={manualQuantity}
                      onChange={(e) => setManualQuantity(e.currentTarget.value)}
                      type="number"
                      size="lg"
                    />
                  </Grid.Col>
                </Grid>
                <Button
                  onClick={handleManualAdd}
                  disabled={!manualPartNumber.trim() || !manualQuantity.trim()}
                  size="lg"
                  fullWidth
                >
                  자재 추가
                </Button>
              </Stack>
            )}
          </Stack>
        </Card>

        {/* Required Materials Reference */}
        <Card withBorder p="lg">
          <Group mb="md">
            <Icon name="package" />
            <Text fw={600}>필요 자재 목록</Text>
          </Group>
          <Stack gap="sm">
            {requiredMaterials.map((material, index) => (
              <Card
                key={index}
                withBorder
                p="md"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <Group justify="space-between">
                  <Stack gap={0}>
                    <Text fw={500}>{material.partNumber}</Text>
                    <Text size="sm" c="dimmed">
                      {material.name}
                    </Text>
                  </Stack>
                  <Badge variant="outline">수량: {material.quantity}</Badge>
                </Group>
              </Card>
            ))}
          </Stack>
        </Card>

        {/* Material Status Summary */}
        <Grid>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <StatusCard
              title="충분"
              value={sufficientCount}
              status="pass"
              subtitle="필요량 확보"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <StatusCard
              title="부족"
              value={insufficientCount}
              status="fail"
              subtitle="추가 필요"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <StatusCard
              title="초과"
              value={excessCount}
              status="medium"
              subtitle="여유 수량"
            />
          </Grid.Col>
        </Grid>

        {/* Scanned Materials */}
        <Card withBorder p="lg">
          <Group justify="space-between" mb="md">
            <Group>
              <Icon name="checkCircle" />
              <Text fw={600}>스캔된 자재 ({scannedMaterials.length})</Text>
            </Group>
          </Group>

          {scannedMaterials.length === 0 ? (
            <Stack align="center" py="xl">
              <Icon name="package" size={48} color="gray" />
              <Text c="dimmed">아직 스캔된 자재가 없습니다</Text>
              <Text size="sm" c="dimmed">
                위의 스캐너나 수동 입력을 사용하세요
              </Text>
            </Stack>
          ) : (
            <Stack gap="md">
              {scannedMaterials.map((material) => (
                <Card key={material.id} withBorder p="md">
                  <Group justify="space-between" mb="sm">
                    <Stack gap={0}>
                      <Group gap="sm">
                        <Text fw={500}>{material.partNumber}</Text>
                        <Badge status={material.status} size="sm" />
                      </Group>
                      <Text size="sm" c="dimmed">
                        {material.name}
                      </Text>
                      {material.batchNumber && (
                        <Text size="xs" c="dimmed">
                          배치: {material.batchNumber}
                        </Text>
                      )}
                      <Text size="xs" c="dimmed">
                        스캔 시간: {material.timestamp}
                      </Text>
                    </Stack>

                    <Group gap="sm">
                      <ActionIcon
                        variant="light"
                        onClick={() => {
                          const newQuantity = prompt(
                            "새로운 수량:",
                            material.scannedQuantity.toString()
                          );
                          if (newQuantity && !isNaN(Number(newQuantity))) {
                            handleEdit(material.id, Number(newQuantity));
                          }
                        }}
                      >
                        <Icon name="edit" size={16} />
                      </ActionIcon>
                      <ActionIcon
                        variant="light"
                        color="red"
                        onClick={() => handleDelete(material.id)}
                      >
                        <Icon name="trash" size={16} />
                      </ActionIcon>
                    </Group>
                  </Group>

                  <Group justify="space-between">
                    <Text size="sm">수량:</Text>
                    <Text
                      size="sm"
                      fw={500}
                      c={
                        material.status === "sufficient"
                          ? "green"
                          : material.status === "insufficient"
                            ? "red"
                            : "orange"
                      }
                    >
                      {material.scannedQuantity} / {material.requiredQuantity}
                    </Text>
                  </Group>
                </Card>
              ))}
            </Stack>
          )}
        </Card>

        {/* Save Button */}
        <Card withBorder p="lg" style={{ position: "sticky", bottom: 16 }}>
          <Button size="lg" fullWidth leftSection={<Icon name="checkCircle" />}>
            자재 목록 저장
          </Button>
        </Card>
      </Stack>
    </Container>
  );
}
