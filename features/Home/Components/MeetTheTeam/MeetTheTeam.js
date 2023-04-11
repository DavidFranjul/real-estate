import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { agents } from "./AgentConsts";
import AgentCard from "./components/AgentCard";
import agentCard from "./components/AgentCard/AgentCard";

const meetTheTeam = () => {
  return (
    <Box
      maxWidth={"1280px"}
      margin="0 auto"
      paddingY={{ base: "3rem", sm: "6rem" }}
    >
      <Text
        textAlign={"center"}
        fontWeight="light"
        fontSize={{ base: "4xl", sm: "5xl" }}
        paddingY=".5rem"
        lineHeight="shorter"
      >
        Meet The Team
      </Text>
      <Text
        textAlign={"center"}
        fontWeight="light"
        fontSize="2xl"
        marginBottom={"1rem"}
        paddingX="2rem"
      >
        The best in the industry.
      </Text>

      <Flex
        direction={{ base: "column", sm: "row" }}
        justifyContent="center"
        gap="1.5rem"
      >
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </Flex>
      <SimpleGrid></SimpleGrid>
    </Box>
  );
};
export default meetTheTeam;
