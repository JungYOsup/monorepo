import { Icon } from "@core/components/atoms/Icon";
import { EquipmentsGetAutocomplete } from "@core/components/organisms/autocomplete/EquipmentsGetAutocomplete";
import { LocationsGetAutocomplete } from "@core/components/organisms/autocomplete/LocationsGetAutocomplete";
import { PrintersGetAutocomplete } from "@core/components/organisms/autocomplete/PrintersGetAutocomplete";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  Notification,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

export interface SettingsModalProps {
  opened: boolean;
  onClose: () => void;
}

interface SettingsFormData {
  userId: string;
  password: string;
  equipment: string;
  outboundLocation: string;
  inboundLocation: string;
  printer: string;
}

// Mock 설정 데이터
const mockSettings: SettingsFormData = {
  userId: "EMP-2024-001",
  password: "••••••••",
  equipment: "LINE-A-001",
  outboundLocation: "OUT-ZONE-A",
  inboundLocation: "IN-ZONE-A",
  printer: "PRINTER-001",
};

// Mock 옵션 데이터
const equipmentOptions = [
  { value: "LINE-A-001", label: "생산라인 A-001" },
  { value: "LINE-A-002", label: "생산라인 A-002" },
  { value: "LINE-B-001", label: "생산라인 B-001" },
  { value: "LINE-B-002", label: "생산라인 B-002" },
  { value: "LINE-C-001", label: "생산라인 C-001" },
];

const locationOptions = [
  { value: "OUT-ZONE-A", label: "출고구역 A" },
  { value: "OUT-ZONE-B", label: "출고구역 B" },
  { value: "OUT-ZONE-C", label: "출고구역 C" },
  { value: "IN-ZONE-A", label: "입고구역 A" },
  { value: "IN-ZONE-B", label: "입고구역 B" },
  { value: "IN-ZONE-C", label: "입고구역 C" },
];

const printerOptions = [
  { value: "PRINTER-001", label: "라벨프린터 001" },
  { value: "PRINTER-002", label: "라벨프린터 002" },
  { value: "PRINTER-003", label: "라벨프린터 003" },
  { value: "PRINTER-004", label: "바코드프린터 001" },
  { value: "PRINTER-005", label: "바코드프린터 002" },
];

export function SettingsModal({ opened, onClose }: SettingsModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<SettingsFormData>({
    initialValues: mockSettings,
    validate: {
      equipment: (value) => (!value ? "설비를 선택해주세요" : null),
      outboundLocation: (value) =>
        !value ? "출고로케이션을 선택해주세요" : null,
      inboundLocation: (value) =>
        !value ? "입고로케이션을 선택해주세요" : null,
      printer: (value) => (!value ? "프린터를 선택해주세요" : null),
    },
  });

  const handleSubmit = async (values: SettingsFormData) => {
    setIsLoading(true);

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Settings saved:", values);
      setShowSuccess(true);

      // Auto hide success notification after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Settings save failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    form.setValues(mockSettings);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group gap="sm">
          <Icon name="settings" size={20} />
          <Text size="lg" fw={600}>
            환경 설정
          </Text>
        </Group>
      }
      size="lg"
      centered
      padding="xl"
    >
      <Box>
        {showSuccess && (
          <Notification
            icon={<Icon name="check" size={16} />}
            color="green"
            title="저장 완료"
            mb="md"
            withCloseButton={false}
          >
            환경 설정이 성공적으로 저장되었습니다.
          </Notification>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="lg">
            {/* 계정 정보 섹션 */}
            <Box>
              <Text size="md" fw={500} mb="sm" c="dark">
                계정 정보
              </Text>
              <Divider mb="md" />

              <Grid>
                <Grid.Col span={6}>
                  <TextInput
                    label="사용자 아이디"
                    placeholder="사용자 아이디"
                    disabled
                    {...form.getInputProps("userId")}
                    leftSection={<Icon name="user" size={16} />}
                    description="아이디는 변경할 수 없습니다"
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <PasswordInput
                    label="비밀번호"
                    placeholder="비밀번호"
                    disabled
                    {...form.getInputProps("password")}
                    leftSection={<Icon name="lock" size={16} />}
                    description="비밀번호는 별도 변경 메뉴를 이용하세요"
                  />
                </Grid.Col>
              </Grid>
            </Box>

            {/* 작업 환경 설정 섹션 */}
            <Box>
              <Text size="md" fw={500} mb="sm" c="dark">
                작업 환경 설정
              </Text>
              <Divider mb="md" />

              <Stack gap="md">
                <EquipmentsGetAutocomplete
                  label="담당 설비"
                  placeholder="담당 설비 선택"
                  {...form.getInputProps("equipment")}
                  description="현재 담당하고 있는 생산 설비를 선택하세요"
                />
                <Grid>
                  <Grid.Col span={6}>
                    <LocationsGetAutocomplete
                      label="출고 로케이션"
                      placeholder="출고 로케이션 선택"
                      {...form.getInputProps("outboundLocation")}
                      description="자재 출고 시 사용할 로케이션"
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <LocationsGetAutocomplete
                      label="입고 로케이션"
                      placeholder="입고 로케이션 선택"
                      {...form.getInputProps("inboundLocation")}
                      description="자재 입고 시 사용할 로케이션"
                    />
                  </Grid.Col>
                </Grid>
                <PrintersGetAutocomplete
                  label="연결 프린터"
                  placeholder="연결 프린터 선택"
                  {...form.getInputProps("printer")}
                  description="현재 연결된 프린터를 선택하세요"
                />
              </Stack>
            </Box>

            {/* 버튼 영역 */}
            <Divider />
            <Group justify="space-between">
              <Button
                variant="subtle"
                leftSection={<Icon name="rotateLeft" size={16} />}
                onClick={handleReset}
                disabled={isLoading}
              >
                초기화
              </Button>

              <Group gap="sm">
                <Button
                  variant="outline"
                  onClick={onClose}
                  disabled={isLoading}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  loading={isLoading}
                  leftSection={<Icon name="save" size={16} />}
                  className="touch-friendly"
                >
                  저장
                </Button>
              </Group>
            </Group>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
