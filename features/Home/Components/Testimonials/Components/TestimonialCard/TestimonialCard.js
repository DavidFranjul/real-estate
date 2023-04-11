import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { TbQuote } from "react-icons/tb";

const TestimonialCard = ({ name, image, company, testimonial }) => {
  return (
    <Box
      backgroundColor={"#ffff"}
      padding={"3rem"}
      flexDirection={"column"}
      marginBottom={{ base: "1rem", sm: "0" }}
    >
      <Box>
        <TbQuote size={"30"} color="#4299e1" />
      </Box>
      <Text fontSize={"lg"} color={"gray.500"} marginY={"1.8rem"}>
        {testimonial}
      </Text>
      <Flex gap={"1rem"} alignItems={"center"}>
        <Image
          src={image}
          width={"6rem"}
          height={"6rem"}
          objectFit="cover"
          borderRadius={"full"}
        />
        <Box>
          by <Text as={"span"}>{name}</Text>
          <Text
            fontSize={"lg"}
            fontStyle={"italic"}
            fontWeight={"light"}
            color="grey.600"
          >
            Company - {company}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
