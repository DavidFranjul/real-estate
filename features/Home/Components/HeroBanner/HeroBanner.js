import { Box, Fade, Text } from "@chakra-ui/react";
import HeroForm from "../HeroForm";

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{ base: "110vh", sm: "60vh" }}
        backgroundImage={"url('./hero/heroBg.jpg')"}
        backgroundPosition={"center"}
        backgroundSize="cover"
        backgroundAttachment={"fixed"}
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
          flexDirection={{ base: "column", sm: "row" }}
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
          padding="2rem"
        >
          <Box width={{ base: "100%", sm: "50%" }}>
            <Text
              fontSize={{ base: "4xl", sm: "5xl" }}
              lineHeight="shorter"
              marginBottom="1.5rem"
              marginRight={"1rem"}
            >
              Download our new<strong> Property catalog </strong>today ...
            </Text>
            <Text
              fontSize={{ base: "lg", sm: "2xl" }}
              lineHeight="shorter"
              marginTop="3rem"
            >
              And find a <strong>home</strong> that's perfect{" "}
              <strong>for you</strong>
            </Text>
          </Box>
          <Box
            width={{ base: "100%", sm: "auto" }}
            marginTop={{ base: "2rem", sm: "0" }}
          >
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
