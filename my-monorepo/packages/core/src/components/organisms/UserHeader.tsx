import { useLogoutModal } from "@core/hooks/ui/modal/useLogoutModal";
import { useSettingsModal } from "@core/hooks/ui/modal/useSettingsModal";
import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Icon } from "../atoms/Icon";

// Mock user data
const mockUser = {
  name: "김현수",
  role: "생산팀 리더",
  department: "제조 1팀",
  employeeId: "EMP-2024-001",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
};

export function UserHeader() {
  const [_, setIsAuthenticated, removeValue] = useLocalStorage({
    key: "isAuthenticated",
  });

  const { openLogoutModal } = useLogoutModal();
  const { openSettingsModal } = useSettingsModal();

  const handleLogout = () => {
    openLogoutModal(() => {
      // 실제 로그아웃 로직
      removeValue();
    });
  };

  const handleSettings = () => {
    openSettingsModal();
  };

  return (
    <>
      <Box
        style={{
          borderBottom: "1px solid #e9ecef",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}
      >
        <Container size="xl" p="md">
          <Group justify="space-between" align="center">
            <Group gap="md">
              <Icon
                name="factory"
                size={24}
                style={{ color: "var(--factory-primary)" }}
              />
              <Box>
                <Text size="lg" fw={600} c="dark">
                  스마트 팩토리 시스템
                </Text>
                <Text size="xs" c="dimmed">
                  실시간 생산 관리 플랫폼
                </Text>
              </Box>
            </Group>

            <Menu shadow="md" width={280} position="bottom-end">
              <Menu.Target>
                <Button
                  variant="subtle"
                  size="md"
                  style={{
                    padding: "8px 12px",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                >
                  <Group gap="sm">
                    <Avatar
                      src={mockUser.avatar}
                      size={32}
                      radius="sm"
                      alt={mockUser.name}
                    />
                    <Box style={{ textAlign: "left" }}>
                      <Text size="sm" fw={500}>
                        {mockUser.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {mockUser.role}
                      </Text>
                    </Box>
                    <Icon name="chevronDown" size={16} />
                  </Group>
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>사용자 정보</Menu.Label>
                <Menu.Item>
                  <Stack gap="xs">
                    <Group gap="sm">
                      <Avatar src={mockUser.avatar} size={40} radius="sm" />
                      <Box>
                        <Text size="sm" fw={500}>
                          {mockUser.name}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {mockUser.role}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {mockUser.department}
                        </Text>
                        <Text size="xs" c="dimmed">
                          ID: {mockUser.employeeId}
                        </Text>
                      </Box>
                    </Group>
                  </Stack>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>계정 관리</Menu.Label>

                <Menu.Item
                  onClick={handleSettings}
                  leftSection={<Icon name="settings" size={16} />}
                >
                  환경 설정
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                  leftSection={<Icon name="logout" size={16} />}
                  color="red"
                  onClick={handleLogout}
                >
                  로그아웃
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Container>
      </Box>
    </>
  );
}
