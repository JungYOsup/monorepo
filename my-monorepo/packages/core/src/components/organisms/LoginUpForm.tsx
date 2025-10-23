import { useDefaultAuthHandler } from "@core/handlers/login/useDefaultAuthHandler";
import { useTenantConfig } from "@core/providers/TenantProvider";
import {
  Box,
  Button,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { AuthLoginPostRequest } from "@sizlcorp/sizl-api-document/dist/models";
import { IconLock, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function LoginForm() {
  const tenant = useTenantConfig();
  const loginFn = tenant?.pages?.login?.api.login;
  const { handleLogin } = useDefaultAuthHandler(loginFn);

  const [loginData, setLoginData] = useState<AuthLoginPostRequest>({
    identifier: "",
    password: "",
  });

  const handleInputChange =
    (field: keyof Omit<AuthLoginPostRequest, "rememberMe">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const isFormValid = loginData.identifier && loginData.password;

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
                type="id"
                value={loginData.identifier}
                onChange={handleInputChange("identifier")}
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
              </Stack>

              {/* Login Button */}
              <Button
                size="lg"
                onClick={() => handleLogin(loginData)}
                disabled={!isFormValid}
                mt="md"
              >
                {"Sign In"}
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Paper>
    </Box>
  );
}
