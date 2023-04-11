import {
  Box,
  Checkbox,
  FormControl,
  Input,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      width={"100%"}
      borderRadius={"sm"}
      backgroundColor={"white"}
      color={"gray.700"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            marginTop={"1.3rem"}
            id="name"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          ></Input>
          <Input
            marginTop={"1.3rem"}
            id="phone"
            type="text"
            placeholder="Phone"
            {...register("phone", { required: true })}
          ></Input>
          <Input
            marginTop={"1.3rem"}
            id="email"
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          ></Input>
          <Textarea
            marginTop={"1.3rem"}
            id="message"
            type="textarea"
            placeholder="Message"
            {...register("message", { required: true })}
          />
          <Checkbox
            marginTop={"1.3rem"}
            type="checkbox"
            placeholder="gdpr"
            {...register("gdpr", { required: true })}
          >
            <Text fontSize={"1rem"} color={"gray.300"}>
              I allow this website to store my data for future ocassions.
            </Text>
          </Checkbox>
        </FormControl>
        <Button
          marginY="1rem"
          padding={"1rem"}
          colorScheme="blue"
          fontWeight={"light"}
          size={"2rem"}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
