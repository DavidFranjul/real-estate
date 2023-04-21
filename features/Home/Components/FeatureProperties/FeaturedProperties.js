import { Box, Text } from "@chakra-ui/react";
import PropertySlider from "./Components/PropertySlider";

const featuredProperties = ({ featuredProperties }) => {
  return (
    <Box backgroundColor="blue.50" padding="1rem">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        color="grey.600"
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "5xl", sm: "4xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingY="2rem"
          textAlign="center"
        >
          {" "}
          Nuestras propiedades <strong>destacadas</strong>
        </Text>
        <Text
          fontSize="2xl"
          fontWeight={"light"}
          marginTop="0"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign={"center"}
        >
          Una seleccion de nuestras <strong>mejores</strong> propiedades
        </Text>
        <PropertySlider featuredProperties={featuredProperties} />
      </Box>
    </Box>
  );
};

export default featuredProperties;
