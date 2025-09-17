import { Box, Group, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function ProgressIndicator({
  currentStep,
  totalSteps,
  steps,
}: ProgressIndicatorProps) {
  return (
    <Box w="100%" mb="xl">
      <Group justify="space-between" style={{ position: "relative" }}>
        {/* Progress Line */}
        <Box
          style={{
            position: "absolute",
            top: "20px",
            left: 0,
            width: "100%",
            height: "2px",
            backgroundColor: "#e9ecef",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              backgroundColor: "#228be6",
            }}
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </Box>

        {/* Step Indicators */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <Box
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: isCurrent ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <ThemeIcon
                  size={40}
                  radius="xl"
                  variant={
                    isCompleted ? "filled" : isCurrent ? "light" : "outline"
                  }
                  color={isCompleted || isCurrent ? "blue" : "gray"}
                  mb="xs"
                  style={{
                    backgroundColor: isCompleted
                      ? "#228be6"
                      : isCurrent
                        ? "white"
                        : "white",
                    border: isCompleted
                      ? "2px solid #228be6"
                      : isCurrent
                        ? "2px solid #228be6"
                        : "2px solid #ced4da",
                    color: isCompleted
                      ? "white"
                      : isCurrent
                        ? "#228be6"
                        : "#adb5bd",
                    boxShadow: isCurrent ? "0 4px 8px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconCheck size={20} />
                    </motion.div>
                  ) : (
                    <Text size="sm" fw={500}>
                      {stepNumber}
                    </Text>
                  )}
                </ThemeIcon>
              </motion.div>

              <motion.div
                initial={{ opacity: 0.7 }}
                animate={{ opacity: isCurrent ? 1 : 0.7 }}
              >
                <Text
                  size="xs"
                  ta="center"
                  maw={80}
                  c={isCurrent ? "blue" : "dimmed"}
                  fw={isCurrent ? 500 : 400}
                >
                  {step}
                </Text>
              </motion.div>
            </Box>
          );
        })}
      </Group>
    </Box>
  );
}
