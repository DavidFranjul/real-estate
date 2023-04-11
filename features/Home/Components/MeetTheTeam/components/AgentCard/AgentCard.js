import { Box, Image, Text } from "@chakra-ui/react";

const AgentCard = ({ name, image, description, title }) => {
  return (
    <Box
      backgroundColor="#f1f1f14a"
      padding={"2rem"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      marginBottom={{ base: "1rem", sm: "0" }}
      flexDirection="column"
      textAlign={"center"}
    >
      <Image
        src={image}
        width="10rem"
        height={"10rem"}
        objectFit="cover"
        borderRadius={"full"}
        marginBottom="2rem"
      />
      <Text color="blue.400" fontSize={"xl"} fontWeight="bold">
        {name}
      </Text>
      <Text fontSize={"lg"} color="blue.600">
        {title}
      </Text>
      <Text
        fontSize={"md"}
        fontWeight="light"
        noOfLines={"2"}
        marginTop="1rem"
        color={"grey.600"}
      >
        {description}
      </Text>
    </Box>
  );
};

export default AgentCard;
