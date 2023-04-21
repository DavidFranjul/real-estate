import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Box
      position={{ base: "relative", sm: "relative", md: "static" }}
      bottom={"6.8rem"}
    >
      <Box
        padding="2rem"
        width={"100%"}
        borderRadius="sm"
        backgroundColor="white"
        color="gray.700"
      >
        <Text fontSize="xl" fontWeight="bold">
          Descargar catalogo
        </Text>
        <Text fontSize="lg">Completar formulario para descargar</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              marginTop="1.3rem"
              id="name"
              type={"text"}
              placeholder="Nombre"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <Text fontSize={"xs"} color="red.400">
                {errors.name.type}
              </Text>
            )}
            <Flex
              gap={{ base: "0", sm: "1rem" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Input
                marginTop="1.3rem"
                id="email"
                type={"email"}
                placeholder="Correo"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <Text fontSize={"xs"} color="red.400">
                  {errors.email.type}
                </Text>
              )}
              <Input
                marginTop="1.3rem"
                id="phone"
                type={"text"}
                placeholder="Telefono"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <Text fontSize={"xs"} color="red.400">
                  {errors.phone.type}
                </Text>
              )}
            </Flex>
            <Checkbox
              marginTop="1.3rem"
              id="CCPA"
              type="checkbox"
              placeholder="CCPA"
              {...register("CCPA", { required: true })}
            >
              Doy mi consentimiento para que este sitio web almacene la
              información enviada.
            </Checkbox>
            {errors.CCPA && (
              <Text fontSize={"xs"} color="red.400">
                {errors.CCPA.type}
              </Text>
            )}
            <Button
              type="submit"
              colorScheme={"blue"}
              width="100%"
              fontSize={"xl"}
              padding="2rem"
              marginTop={"2rem"}
            >
              Descargar
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
export default HeroForm;
