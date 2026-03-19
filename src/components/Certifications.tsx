import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
} from "@chakra-ui/react";
import { FaCertificate, FaTrophy, FaGraduationCap, FaCode } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import AnimatedCard from "./AnimatedCard";

interface CertificationItemProps {
  title: string;
  issuer: string;
  date?: string;
  type: "certification" | "course" | "bootcamp" | "challenge";
  description?: string;
  index: number;
}

const CertificationItem = ({
  title,
  issuer,
  date,
  type,
  description,
  index,
}: CertificationItemProps) => {
  const getIcon = () => {
    switch (type) {
      case "certification":
        return FaCertificate;
      case "course":
        return FaGraduationCap;
      case "bootcamp":
        return FaCode;
      case "challenge":
        return FaTrophy;
      default:
        return FaCertificate;
    }
  };

  const getColorScheme = () => {
    switch (type) {
      case "certification":
        return "blue";
      case "course":
        return "green";
      case "bootcamp":
        return "purple";
      case "challenge":
        return "orange";
      default:
        return "blue";
    }
  };

  return (
    <AnimatedCard delay={0.1 * index}>
      <Card height="full" shadow="md" _hover={{ shadow: "lg" }} transition="all 0.2s">
        <CardBody>
          <VStack spacing={4} align="start" height="full">
            <HStack spacing={3}>
              <Icon as={getIcon()} w={6} h={6} color="brand.500" />
              <Badge colorScheme={getColorScheme()} variant="subtle">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
            </HStack>
            <VStack spacing={2} align="start" flex={1}>
              <Heading size="md" lineHeight="1.2">
                {title}
              </Heading>
              <Text color="gray.600" fontWeight="medium">
                {issuer}
              </Text>
              {date && (
                <Text color="gray.500" fontSize="sm">
                  {date}
                </Text>
              )}
              {description && (
                <Text color="gray.600" fontSize="sm" mt={2}>
                  {description}
                </Text>
              )}
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </AnimatedCard>
  );
};

export default function Certifications() {
  const certifications = [
    {
      title: "Foundation Course on Green Skills & Artificial Intelligence",
      issuer: "Edunet AICTE & Skill India (SkillsFuture)",
      type: "course" as const,
    },
    {
      title: "Data Science Challenge 2.0 – Certificate of Appreciation",
      issuer: "IEEE (National Level)",
      type: "challenge" as const,
      description: "Organized by IEEE at national level",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "DevTown",
      type: "bootcamp" as const,
    },
    {
      title: "Data Analytics Job Simulation – Tata Group",
      issuer: "Forage",
      date: "June 2025",
      type: "certification" as const,
      description: "Completed GenAI-based simulation focused on customer delinquency modeling and AI strategy",
    },
  ];

  return (
    <Box id="certifications" py={20} bg="gray.50">
      <Container maxW={"7xl"}>
        <AnimatedSection>
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            mb={16}
          >
            <Heading fontSize={"3xl"}>Certifications & Courses</Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
              Professional certifications and continuous learning achievements
            </Text>
          </Stack>
        </AnimatedSection>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {certifications.map((cert, index) => (
            <CertificationItem key={index} index={index} {...cert} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
