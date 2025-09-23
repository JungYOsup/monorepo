import { Icon } from "@core/components/atoms/Icon";
import { EquipmentsGetAutocomplete } from "@core/components/organisms/autocomplete/EquipmentsGetAutocomplete";
import { LocationsGetAutocomplete } from "@core/components/organisms/autocomplete/LocationsGetAutocomplete";
import { PrintersGetAutocomplete } from "@core/components/organisms/autocomplete/PrintersGetAutocomplete";
import { useAuthWhoamiAuthWhoamiGetQuery } from "@core/hooks/api/auth-whoami/useAuthWhoamiQuery";
import { useUsersUsersUserIdPutMutation } from "@core/hooks/api/users/useUsersMutation";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { MasterApiUsersUserIdPutRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export interface SettingsModalProps {
  opened: boolean;
  onClose: () => void;
}

interface SettingsFormData {
  userId: string;
  password: string;
  equipmentCode: string | null;
  fromLocationCode: string | null;
  toLocationCode: string | null;
  printerCode: string | null;
}

export function SettingsModal({ opened, onClose }: SettingsModalProps) {
  const { data } = useAuthWhoamiAuthWhoamiGetQuery();
  const userData = data?.data;
  const queryClient = useQueryClient();
  const { mutateAsync: updateUser } = useUsersUsersUserIdPutMutation();
  const {
    id,
    username,
    equipmentCode,
    toLocationCode,
    fromLocationCode,
    printerCode,
  } = userData || {};

  const form = useForm<SettingsFormData>({
    initialValues: {
      userId: username || "",
      password: "*********",
      equipmentCode: equipmentCode || null,
      fromLocationCode: fromLocationCode || null,
      toLocationCode: toLocationCode || null,
      printerCode: printerCode || null,
    },
  });

  const handleSubmit = async () => {
    try {
      if (!id) throw new Error("사용자 ID를 확인할 수 없습니다");
      const payload = {
        equipmentCode: form.values.equipmentCode || null,
        fromLocationCode: form.values.fromLocationCode || null,
        toLocationCode: form.values.toLocationCode || null,
        printerCode: form.values.printerCode || null,
      } as MasterApiUsersUserIdPutRequest["usersUserIdDeleteRequest"];

      await updateUser({
        userId: id,
        usersUserIdDeleteRequest: payload,
      } as MasterApiUsersUserIdPutRequest);

      await queryClient.invalidateQueries({ queryKey: ["authWhoamiGet"] });
      onClose();
    } catch (error) {
      console.error("Settings save failed:", error);
    }
  };

  const handleReset = () => {
    form.reset();
  };

  useEffect(() => {
    if (opened) {
      form.setValues({
        userId: username || "",
        password: "*********",
        equipmentCode: equipmentCode || null,
        fromLocationCode: fromLocationCode || null,
        toLocationCode: toLocationCode || null,
        printerCode: printerCode || null,
      });
    }
  }, [
    opened,
    username,
    equipmentCode,
    fromLocationCode,
    toLocationCode,
    printerCode,
  ]);

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
                {...form.getInputProps("equipmentCode")}
                description="현재 담당하고 있는 생산 설비를 선택하세요"
              />
              <Grid>
                <Grid.Col span={6}>
                  <LocationsGetAutocomplete
                    label="출고 로케이션"
                    placeholder="출고 로케이션 선택"
                    {...form.getInputProps("fromLocationCode")}
                    description="자재 출고 시 사용할 로케이션"
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <LocationsGetAutocomplete
                    label="입고 로케이션"
                    placeholder="입고 로케이션 선택"
                    value={form.values.toLocationCode}
                    {...form.getInputProps("toLocationCode")}
                    description="자재 입고 시 사용할 로케이션"
                  />
                </Grid.Col>
              </Grid>
              <PrintersGetAutocomplete
                value={form.values.printerCode}
                label="연결 프린터"
                placeholder="연결 프린터 선택"
                {...form.getInputProps("printerCode")}
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
            >
              초기화
            </Button>

            <Group gap="sm">
              <Button variant="outline" onClick={onClose}>
                취소
              </Button>
              <Button
                onClick={handleSubmit}
                leftSection={<Icon name="save" size={16} />}
                className="touch-friendly"
              >
                저장
              </Button>
            </Group>
          </Group>
        </Stack>
      </Box>
    </Modal>
  );
}
