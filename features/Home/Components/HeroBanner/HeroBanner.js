import { Box, Fade, Text } from "@chakra-ui/react";
import HeroForm from "../HeroForm";

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{ base: "110vh", sm: "70vh", md: "80vh" }}
        backgroundImage={"url('./hero/heroBg.jpg')"}
        backgroundPosition={"center"}
        backgroundSize="cover"
        backgroundAttachment={"fixed"}
        marginTop="2rem"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.85"
          backgroundColor="blue.900"
        />
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          alignItems="center"
          justifyContent={{ base: "flex-start", sm: "space-between" }}
          maxWidth="1280px"
          position="absolute"
          color="white"
          fontWeight="light"
          left="0"
          right="0"
          bottom="0"
          top="0"
          margin="0 auto"
          padding="1rem"
          paddingTop="1rem"
          paddingBottom="1rem"
        >
          <Box width={{ base: "100%", sm: "75%", md: "50%" }}>
            <Text
              fontSize={{ base: "3xl", sm: "3xl", md: "5xl" }}
              lineHeight="shorter"
              marginTop="1rem"
              marginBottom="1.5rem"
              marginRight={"1rem"}
            >
              Descarga nuestro nuevo<strong> catalogo de propiedades </strong>
              hoy ...
            </Text>
            <Text
              fontSize={{ base: "4xl", sm: "2xl" }}
              lineHeight=""
              marginTop=".5rem"
              width={{ base: "15rem", sm: "15rem" }}
              paddingBottom={{ base: "10rem", sm: "3rem" }}
            >
              Y encuentra un <strong>hogar</strong> perfecto
              <strong> para ti</strong>
            </Text>
          </Box>
          <Box
            width={{ base: "100%", sm: "auto" }}
            marginTop={{ base: "2rem", sm: "5rem", md: "7rem" }}
          >
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
