import { ImageWithFallback } from "@core";
import { ActionIcon, Box, Group, Text, Title } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const carouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBwcm9kdWN0aXZpdHl8ZW58MXx8fHwxNzU3OTI5MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Boost Your Productivity",
    subtitle:
      "Streamline your workflow with powerful tools designed for modern professionals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTc5NDgzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Collaborate Seamlessly",
    subtitle:
      "Connect with your team and work together from anywhere in the world",
  },
  {
    image:
      "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBncm93dGh8ZW58MXx8fHwxNzU3OTE5MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Achieve Your Goals",
    subtitle:
      "Turn your vision into reality with data-driven insights and analytics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3OTE4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Innovation at Scale",
    subtitle:
      "Leverage cutting-edge technology to transform your business operations",
  },
];

export function LoginCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      style={{
        position: "relative",
        height: "100%",
        background:
          "linear-gradient(135deg, #581c87 0%, #1e3a8a 50%, #312e81 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <ImageWithFallback
            src={carouselData[currentIndex].image}
            alt={carouselData[currentIndex].title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(88, 28, 135, 0.8) 0%, rgba(30, 58, 138, 0.7) 50%, rgba(49, 46, 129, 0.8) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <Box
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          padding: "48px",
        }}
      >
        <Box style={{ maxWidth: "400px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Title order={1} c="white" mb="md" style={{ lineHeight: 1.3 }}>
                {carouselData[currentIndex].title}
              </Title>
              <Text
                c="rgba(255, 255, 255, 0.9)"
                size="lg"
                style={{ lineHeight: 1.6 }}
              >
                {carouselData[currentIndex].subtitle}
              </Text>
            </motion.div>
          </AnimatePresence>

          {/* Progress Dots */}
          <Group gap="xs" mt="xl">
            {carouselData.map((_, index) => (
              <motion.div key={index}>
                <ActionIcon
                  variant="transparent"
                  size="xs"
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor:
                      index === currentIndex
                        ? "white"
                        : "rgba(255, 255, 255, 0.4)",
                    transition: "background-color 0.3s ease",
                    cursor: "pointer",
                  }}
                  //   whileHover={{ scale: 1.2 }}
                  //   whileTap={{ scale: 0.9 }}
                />
              </motion.div>
            ))}
          </Group>
        </Box>
      </Box>

      {/* Decorative Elements */}
      <Box
        style={{
          position: "absolute",
          top: "25%",
          right: "25%",
          width: "256px",
          height: "256px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          filter: "blur(48px)",
        }}
      />
      <Box
        style={{
          position: "absolute",
          bottom: "33%",
          left: "25%",
          width: "192px",
          height: "192px",
          backgroundColor: "rgba(168, 85, 247, 0.1)",
          borderRadius: "50%",
          filter: "blur(32px)",
        }}
      />
    </Box>
  );
}
