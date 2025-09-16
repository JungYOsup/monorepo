import { LoginCarousel, LoginForm } from "@core/index";
import { AppShell, Flex, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider>
      <AppShell padding={0}>
        <Flex h="100vh">
          {/* Left Panel - Visual Storytelling */}
          <div style={{ flex: "3", display: "none" }} className="large-screen">
            <LoginCarousel />
          </div>

          {/* Right Panel - Login Form */}
          <Flex
            flex={2}
            align="center"
            justify="center"
            p="xl"
            style={{
              minHeight: "100vh",
              position: "relative",
            }}
          >
            <LoginForm />

            {/* Mobile Background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #312e81 100%)",
                opacity: 0.1,
                zIndex: -1,
              }}
              className="mobile-bg"
            />
          </Flex>
        </Flex>

        <style>{`
          @media (min-width: 1024px) {
            .large-screen {
              display: block !important;
            }
            .mobile-bg {
              display: none !important;
            }
          }
        `}</style>
      </AppShell>
    </MantineProvider>
  );
}
