import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { testimonials } from "./TestimonialConsts";
import TestimonialCard from "./Components/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <Box backgroundColor={"blue.50"}>
      <Box
        maxWidth={"1280px"}
        margin={"0 auto"}
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight={"shorter"}
          fontWeight={"light"}
          paddingX={"2rem"}
          textAlign={"center"}
        >
          Testimoniales
        </Text>
        <Text
          fontSize={"2xl"}
          fontWeight={"light"}
          marginBottom={"3rem"}
          marginTop={"1rem"}
          paddingX={"2rem"}
          textAlign={"center"}
        >
          Esto dicen nuestros apreciados clientes de nosotros
        </Text>
        <SimpleGrid
          columns={"3"}
          minChildWidth={"300px"}
          gap={{ base: "0.5rem", sm: "2.5rem" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
