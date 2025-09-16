import {
  Box,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconLock, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function LoginForm() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange =
    (field: keyof Omit<LoginData, "rememberMe">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleRememberMeChange = (checked: boolean) => {
    setLoginData((prev) => ({ ...prev, rememberMe: checked }));
  };

  const handleLogin = async () => {
    setLoading(true);
    // 로그인 로직 시뮬레이션
    setTimeout(() => {
      console.log("Login with:", loginData);
      setLoading(false);
    }, 1500);
  };

  const isFormValid = loginData.email && loginData.password;

  return (
    <Box w="100%" maw={400} mx="auto">
      <Paper shadow="xl" p="xl" radius="lg" style={{ border: "none" }}>
        <Stack gap="xl">
          {/* Header */}
          <Box ta="center">
            <Title order={1} mb="xs">
              {"SIZL::스피드랙"}
            </Title>
            <Text c="dimmed">{"MES SYSTEM"}</Text>
          </Box>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Stack gap="lg">
              <TextInput
                label="아이디"
                placeholder="사번을 입력하세요"
                leftSection={<IconMail size={16} />}
                type="email"
                value={loginData.email}
                onChange={handleInputChange("email")}
                required
                size="md"
              />

              <Stack gap="xs">
                <PasswordInput
                  label="비밀번호"
                  placeholder="비밀번호를 입력하세요"
                  leftSection={<IconLock size={16} />}
                  value={loginData.password}
                  onChange={handleInputChange("password")}
                  required
                  size="md"
                />

                {/* Remember Me & Forgot Password */}
                <Group justify="space-between" mt="xs">
                  <Checkbox
                    label="Remember me"
                    checked={loginData.rememberMe}
                    onChange={(event) =>
                      handleRememberMeChange(event.currentTarget.checked)
                    }
                    size="sm"
                  />
                </Group>
              </Stack>

              {/* Login Button */}
              <Button
                size="lg"
                onClick={handleLogin}
                disabled={!isFormValid}
                loading={loading}
                mt="md"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Paper>
    </Box>
  );
}
