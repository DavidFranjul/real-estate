const { Box, Badge, Text, HStack, Flex } = require("@chakra-ui/react");
import { usePropertyFormat } from "../../Hooks/usePropertyFormat";
import { TbBed, TbBath, TbRuler } from "react-icons/tb";
import Link from "next/link";

const PropertyCard = (property) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);

  const currency = "Usd";

  return (
    <Box marginBottom="4rem" backgroundColor={"white"}>
      <Link href={"/properties/$externalID"}>
        <Box
          backgroundImage={`url("${coverPhoto}")`}
          height="250px"
          backgroundPosition={"center center"}
          backgroundSize="cover"
          position={"relative"}
          display="flex"
          flexDirection={"column"}
          justifyContent="space-between"
        >
          <Box margin={"1rem"}>
            <Badge colorScheme={"green"}>{purpose}</Badge>
          </Box>

          <Box
            height={"50"}
            bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)"
            paddingX="1rem"
          >
            <Text
              fontSize={{ base: "1rem", sm: "2rem" }}
              fontWeight="md"
              color="whiteAlpha.800"
            >
              {price}
              <small> USD</small>
            </Text>
          </Box>
        </Box>
        <Box padding="1.5rem">
          <Text fontSize={"xl"} fontWeight="medium" marginBottom={"1rem"}>
            {propertyType}
          </Text>
          <Text fontWeight={"light"} fontSize="small" isTruncated>
            {address}
          </Text>
          <Text isTruncated>{title}</Text>
          <HStack spacing="1.3rem" marginTop="1rem">
            <Flex alignItems={"center"} gap="0.3rem">
              <TbBed />
              {rooms}
            </Flex>
            <Flex alignItems={"center"} gap="0.3rem">
              <TbBath />
              {baths}
            </Flex>
            <Flex alignItems={"center"} gap="0.3rem">
              <TbRuler />
              {sqSize}
              <sup>m2</sup>
            </Flex>
          </HStack>
        </Box>
      </Link>
    </Box>
  );
};

export default PropertyCard;
