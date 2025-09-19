import { useAuthLoginAuthLoginPostMutation } from "@core/hooks/api/auth-login/useAuthLoginMutation";
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
import { useLocalStorage } from "@mantine/hooks";
import { IconLock, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginData {
  id: string;
  password: string;
}

export function LoginForm() {
  const { mutate: LoginMutate } = useAuthLoginAuthLoginPostMutation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage({
    key: "isAuthenticated",
    defaultValue: false,
  });

  const [loginData, setLoginData] = useState<LoginData>({
    id: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange =
    (field: keyof Omit<LoginData, "rememberMe">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleLogin = async () => {
    LoginMutate({
      authLoginPostRequest: {
        identifier: loginData.id,
        password: loginData.password,
      },
    });

    setLoading(true);
    // 로그인 로직 시뮬레이션
    setTimeout(() => {
      console.log("Login with:", loginData);
      setLoading(false);
    }, 1500);

    navigate("/works");
    setIsAuthenticated(true);
  };

  const isFormValid = loginData.id && loginData.password;

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
                value={loginData.id}
                onChange={handleInputChange("id")}
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
